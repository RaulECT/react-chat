const initialState = {
  users: []
}

const userListReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'NEW_USER':
      return Object.assign( {}, state, {
        users: state.users.concat( action.user )
      } )
      break;
    default:

  }

  return state
}

export default userListReducer
