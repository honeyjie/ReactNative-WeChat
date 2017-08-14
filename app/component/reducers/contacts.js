import { handleActions } from 'redux-actions'
import {
  ADD_FRIEND,
  DELETE_FRIEND,
  ADD_CHAT_LOG,
  // DELETE_CHAT_LOG,
  GET_CURRENT_FRIEND_ID,
} from '../actions/contacts'
import { fromJS, toJS } from 'immutable'

const initialState = fromJS({
  friends: {
    1: {
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ssiskind/128.jpg',
      name: 'Jaden Feest',
    },
  },
  currentFriendId: null,
  userInfo: {
    avatar:
      'https://avatars2.githubusercontent.com/u/16475074?v=4&u=8fca28cc5ff7d0078db87c9b4961b976e5a8f355&s=400',
    id: 0,
    name: 'Amanda_jiejie',
  },
  chatLogs: {
    // 1: {
    //   lastTime: 1502727674817,
    //   messages: {
    //     1502727674817: ['NiceToMeetYou', 'You do greatJob!'],
    //   },
    // },
  },
})

export default handleActions(
  {
    [ADD_FRIEND]: (state, action) => {
      // return state.updateIn(['friends'], value => value.push(action.payload))
      const { id, name, avatar } = action.payload
      const newState = state.mergeDeepIn(['friends'], {
        [friend.id]: {
          name,
          avatar,
        },
      })
      console.log(newState)
      return newState
    },
    [DELETE_FRIEND]: (state, action) => {
      return state.updateIn(['friends'], value =>
        value.delete(action.payload.id)
      )
      // ('friends').delete(action.payload.id)
    },
    [ADD_CHAT_LOG]: (state, action) => {
      console.log('11')
      const { id, message, time } = action.payload
      // 聊天对象id 存在则添加
      // 聊天对象id 不存在则融合进去

      const messageId = state.get('chatLogs').get(id)
      console.log(messageId)
      if (messageId) {
        // 时间是否一样,
        const messages = state.getIn(['chatLogs', id, 'messages'])

        if (messages[time]) {
          return state
            .updateIn(['chatLogs', id, 'messages', time], value => {
              value.push(message)
              return value
            })
            .setIn(['chatLogs', id, 'lastTime'], time)
        } else {
          return state
            .mergeDeepIn(['chatLogs', id, 'messages'], { [time]: [message] })
            .setIn(['chatLogs', id, 'lastTime'], time)
        }
      } else {
        // 新建聊天
        return state.mergeDeepIn(['chatLogs'], {
          [id]: {
            lastTime: time,
            messages: {
              [time]: [message],
            },
          },
        })
      }
      // const newState = state.mergeDeeoIn(['chatLog'], {
      //   [id]: {
      //     message: time,
      //   },
      // })
      // console.log(newState)
      // return newState
    },
    // [DELETE_CHAT_LOGS]: (state, action) => {
    //   return state.get('chatLog').delete(action.payload.id)
    // },
    // [GET_CURRENT_FRIEND_ID]: (state, action) => {
    //   console.log(action.payload)
    //   return state.set('currentFriendId', action.payload)
    // },
    // [CURRENT_FRIEND_ID]: (state, action) => {
    //   return state.set(
    //     'currentFriendInfo',
    //     state.get('friends').get(action.payload.id)
    //   )
    // },
  },
  initialState
)
