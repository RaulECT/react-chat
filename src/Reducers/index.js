import { combineReducers } from 'redux'

import loginReducer from './LoginReducer'
import chatReducer from './ChatReducer'
import userListReducer from './UserListReducers'

const reducers = combineReducers( {
  userState: loginReducer,
  chatState: chatReducer,
  usersState: userListReducer
} )

export default reducers
