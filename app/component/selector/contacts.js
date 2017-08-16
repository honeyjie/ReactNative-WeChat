import { createSelector } from 'reselect'
import { fromJS } from 'immutable'

const selectContactsDomain = state => {
  return state.contacts
}

export const friendsSelector = createSelector(
  selectContactsDomain,
  contacts => {
    console.log(contacts.toJS())
    return contacts.get('friends')
  }
)

// export const currentFriendIdSelector = createSelector(
//   selectContactsDomain,
//   contacts => {
//     return contacts.get('currentFriendId') || fromJS({})
//   }
// )

// export const friendSelector = createSelector([friendsSelector, currentFriendIdSelector], (friends, id) => {
//   return friends.get(id)
// })

// export const friendChatLogSelector = createSelector([chatLogsSelector, currentFriendIdSelector], (chatLogs, id) => {
//   return chatLogs.get(id)
// })

// export const userInfoSelector = createSelector(selectContactsDomain, contacts=> {
//   return contacts.get('userInfo')
// })
export const chatLogsSelector = createSelector(selectContactsDomain, (contacts) => {
  console.log('chatLogsSelector', contacts.toJS())
  return contacts.get('chatLogs')
})

export const recentChatLogsSelector = createSelector(selectContactsDomain, (contacts) => {
    console.log('recentChatLogsSelector', contacts.toJS())
  return contacts.get('recentChatLogs')
})


