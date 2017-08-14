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

// export const CURRENT_FRIENDINFO = 'APP/CURRENT_FRIENDINFO'
// export const currentFriendInfo = createAction(CURRENT_FRIENDINFO, id => {
//   console.log(id)
//   return id
// })

export const ADD_CHAT_LOG = 'APP/ADD_CHAT_LOG'
export const addChatLog = createAction(ADD_CHAT_LOG, (id, message, time) => {
  console.log(id, message, time)
  return {
    id,
    time,
    message,
  }
})

// export const deleteChatLog = 'APP/DELETE_CHAT_LOG'
// export const DELETE_CHAT_LOG = createAction(DELETE_CHAT_LOG, id=>id)
export const GET_CURRENT_FRIEND_ID = 'ADD/GET_CURRENT_FRIEND_ID'
export const getCurrentFriendId = createAction(GET_CURRENT_FRIEND_ID, id => {
  console.log(id)

  return id
})
