import { combineReducers } from 'redux'

import loginReducer from './LoginReducer'

const reducers = combineReducers( {
  userState: loginReducer
} )

export default reducers
