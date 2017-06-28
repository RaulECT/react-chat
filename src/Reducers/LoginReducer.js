const initialState = {
  isUserLogged: false
}

const loginReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'USER_LOGGED_SUCCESS':
      return Object.assign( {}, state, { isUserLogged: true } )

    case 'USER_LOGGED_FAILED':
      return Object.assign( {}, state, { isUserLogged: false } )
  }

  return state
}

export default loginReducer
