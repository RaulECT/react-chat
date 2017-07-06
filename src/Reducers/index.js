import { combineReducers } from 'redux'

import loginReducer from './LoginReducer'
import chatReducer from './ChatReducer'

const reducers = combineReducers( {
  userState: loginReducer,
  chatState: chatReducer
} )

export default reducers
