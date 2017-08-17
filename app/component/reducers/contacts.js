import { handleActions } from 'redux-actions'
import {
  ADD_FRIEND,
  DELETE_FRIEND,
  ADD_CHAT_LOG,
  // DELETE_CHAT_LOG,
  GET_RECENT_CHAT_LOGS,
  GET_FRIENDS,
  GET_CHAT_LOGS,
} from '../actions/contacts'
import { fromJS, toJS } from 'immutable'

const initialState = fromJS({
  friends: {},
  chatLogs: {},
  recentChatLogs: {},
})

export default handleActions(
  {
    [ADD_FRIEND]: (state, action) => {
      const { id, name, avatar } = action.payload
      const newState = state.mergeDeepIn(['friends'], {
        [id]: {
          id,
          name,
          avatar,
        },
      })
      return newState
    },
    [DELETE_FRIEND]: (state, action) => {
      return state.updateIn(['friends'], value =>
        value.delete(action.payload.id)
      )
    },
    [ADD_CHAT_LOG]: (state, action) => {
      const { id, message, sendTime, whoseId } = action.payload
      const messageId = state.getIn(['chatLogs', id])

      if (messageId) {
        const lastIndex = messageId.length - 1
        const lastTime = messageId.getIn([lastIndex, 'lastTime'])

        if (sendTime - lastTime < 60 * 1000) {
          const newState = state
            .updateIn(['chatLogs', id, lastIndex, 'messages'], messages => {
              return messages.push({ message, whoseId })
            })
            .setIn(['chatLogs', id, lastIndex, 'lastTime'], sendTime)
            .setIn(['recentChatLogs', id], {
              lastTime: sendTime,
              lastMessage: message,
            })
          return newState
        } else {
          const newState = state
            .updateIn(['chatLogs', id], messageSections => {
              return messageSections.push({
                lastTime: sendTime,
                messages: [{ message, whoseId }],
              })
            })
            .setIn(['recentChatLogs', id], {
              lastTime: sendTime,
              lastMessage: message,
            })
          return newState
        }
      } else {
        // 新建聊天
        const newState = state
          .mergeDeepIn(['chatLogs'], {
            [id]: [
              {
                lastTime: sendTime,
                messages: [{ message, whoseId }],
              },
            ],
          })
          .setIn(['recentChatLogs', id], {
            lastTime: sendTime,
            lastMessage: message,
          })

        return newState
      }
    },
    // [DELETE_CHAT_LOGS]: (state, action) => {
    //   return state.get('chatLog').delete(action.payload.id)
    // },
    [GET_FRIENDS]: (state, action) => {
      const friends = action.payload
      return state.mergeDeepIn(
        ['friends'],
        fromJS(
          friends.reduce(
            (previous, current) =>
              Object.assign({}, previous, {
                [current.id]: current,
              }),
            {}
          )
        )
      )
    },
    [GET_CHAT_LOGS]: (state, action) => {
      const chatLogs = action.payload
      const newState = state.mergeDeepIn(['chatLogs'], fromJS(chatLogs))
      return newState
    },
    [GET_RECENT_CHAT_LOGS]: (state, action) => {
      const recentChatLogs = action.payload
      const newState = state.mergeDeepIn(
        ['recentChatLogs'],
        fromJS(
          recentChatLogs.reduce(
            (previous, current) =>
              Object.assign({}, previous, {
                [current.id]: current,
              }),
            {}
          )
        )
      )
      return newState
    },
  },
  initialState
)
