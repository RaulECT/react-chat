const initialState = {
  messages: []
}

const chatReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'NEW_MESSAGE':
      return Object.assign( {}, state, {
        messages: state.messages.concat( action.message )
      } )
      break;
    default:
      return state

  }
  return state
}

export default chatReducer
