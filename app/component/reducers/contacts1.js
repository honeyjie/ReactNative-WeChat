import { handleActions } from 'redux-actions'
import {
  ADD_FRIEND,
  DELETE_FRIEND,
  CURRENT_FRIENDINFO,
} from '../actions/contacts'
import { fromJS, toJS } from 'immutable'

const initialState = fromJS({
  friends: [
    {
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ssiskind/128.jpg',
      id: 1,
      name: 'Jaden Feest',
    },
  ],
  currentFriendInfo: {},
  userInfo: {
    avatar:
      'https://avatars2.githubusercontent.com/u/16475074?v=4&u=8fca28cc5ff7d0078db87c9b4961b976e5a8f355&s=400',
    id: 0,
    name: 'Amanda_jiejie',
  },
  chatLog: [
    {
      id: 1,
      lastMessage: 'NiceToMeetYou',
      lastTime: 1502699943545,
    },
  ],
})

export default handleActions(
  {
    [ADD_FRIEND]: (state, action) => {
      return state.updateIn(['friends'], value => value.push(action.payload))
    },
    [DELETE_FRIEND]: (state, action) => {
      return state.updateIn(['friends'], value =>
        value.filter((i, el) => el.id !== 1)
      )
    },
    [CURRENT_FRIENDINFO]: (state, action) => {
      return state.set(
        'currentFriendInfo',
        state.get('friends').find((index, el) => el.id === action.payload.id)
      )
    },
  },
  initialState
)
