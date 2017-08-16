import { createAction } from 'redux-actions'
import faker from 'faker'

let friendId = 2

export const ADD_FRIEND = 'APP/ADD_FRIEND'
export const addFriend = createAction(ADD_FRIEND, () => {
  return {
    id: friendId++,
    name: faker.name.findName(),
    avatar: faker.image.avatar(),
  }
})

export const DELETE_FRIEND = 'APP/DELETE_FRIEND'
export const deleteFriend = createAction(DELETE_FRIEND, id => id)

export const ADD_CHAT_LOG = 'APP/ADD_CHAT_LOG'
export const addChatLog = createAction(
  ADD_CHAT_LOG,
  (id, message, sendTime, whoseId) => {
    return {
      id: id.toString(),
      message,
      sendTime,
      whoseId,
    }
  }
)

// export const deleteChatLog = 'APP/DELETE_CHAT_LOG'
// export const DELETE_CHAT_LOG = createAction(DELETE_CHAT_LOG, id=>id)

export const GET_RECENT_CHAT_LOGS = 'APP/GET_RECENT_CHAT_LOGS'
export const getRecentChatLogs = createAction(GET_RECENT_CHAT_LOGS, () => {
  return [
    {
      id: 1,
      lastTime: 1502727774817,
      lastMessage: 'Hunting for a new Job',
    }
  ]
})

export const GET_FRIENDS = 'APP/GET_FRIENDS'
export const getFriends = createAction(GET_FRIENDS, () => {
  return [
    {
      id: 0,
      avatar:
        'https://avatars2.githubusercontent.com/u/16475074?v=4&u=8fca28cc5ff7d0078db87c9b4961b976e5a8f355&s=400',
      name: 'Amanda_jiejie',
    },
    {
      id: 1,
      avatar: 'https://avatars1.githubusercontent.com/u/7406269?v=4&s=400',
      name: 'Lime',
    },
  ]
})

export const GET_CHAT_LOGS = 'APP/GET_CHAT_LOGS'
export const getChatLogs = createAction(GET_CHAT_LOGS, id => {
  return {
    [id]: [
      {
        lastTime: 1502727674817,
        messages: [
          { message: 'Hi, Nice to meet you!', whoseId: 0 },
          { message: "Hi, I'm Lime", whoseId: 1 },
        ],
      },
      {
        lastTime: 1502727774817,
        messages: [
          { message: 'What are you doing?', whoseId: 1 },
          { message: 'Hunting for a new Job', whoseId: 0 },
        ],
      }
    ]
  }
})
