import { createSelector } from 'reselect'
import { fromJS } from 'immutable'

const selectContactsDomain = state => {
  return state.contacts
}

export const friendsSelector = createSelector(
  selectContactsDomain,
  contacts => {
    return contacts.get('friends')
  }
)

// export const friendChatLogSelector = createSelector([chatLogsSelector, currentFriendIdSelector], (chatLogs, id) => {
//   return chatLogs.get(id)
// })

export const chatLogsSelector = createSelector(selectContactsDomain, (contacts) => {
  return contacts.get('chatLogs')
})

export const recentChatLogsSelector = createSelector(selectContactsDomain, (contacts) => {
  return contacts.get('recentChatLogs')
})


