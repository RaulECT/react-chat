import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import io from 'socket.io-client'
import UserLogin from '../UserLogin'
import Chat from '../Chat'

let socket = io(`https://chatsocketsio.herokuapp.com/`)

class UserLoginContainer extends Component {

  login( event ) {
    event.preventDefault()
    let userName = event.target.name

    socket.emit( 'nuevo usuario', userName.value, ( data ) => {
      console.log( userName.value )
      store.dispatch( {
        type: 'USER_LOGGED_SUCCESS'
      } )
    } )
  }

  render() {
    console.log( store.getState() );


      if ( store.getState().userState.isUserLogged ) {
        return(
          <Chat />
        )
      } else {
        return(
          <UserLogin login={this.login} />
        )
      }


  }

}

const mapStateToProps = ( store ) => {
  return {
    isLogin: store.userState.isUserLogged
  }
}

export default connect( mapStateToProps )( UserLoginContainer )
