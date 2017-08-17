import { combineReducers } from 'redux'
import contacts from './contacts'

const AppReducer = combineReducers({
  contacts,
  // other reducers
})

export default AppReducer
