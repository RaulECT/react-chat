import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import io from 'socket.io-client'
import Chat from '../Chat'

let socket = io(`https://chatsocketsio.herokuapp.com/`)

class ChatContainer extends Component {

  componentDidMount() {
    socket.on( 'mensaje', data => {
      store.dispatch( {
        type: 'NEW_MESSAGE',
        message: data
      } )

      console.log( store.getState() );
    } )

    socket.on( 'actualizarUsuarios', usuario => {
      store.dispatch( {
        type: 'NEW_USER',
        user: usuario
      } )

      console.log( store.getState() )
    } )
  }

  listAllMessages() {
    const messages = store.getState().chatState.messages

    messages.map( ( message, index ) => {

      return(
        <div>
          <strong key={index}>{message.usuario}</strong> -{message.mensaje}
          <br/>
        </div>
      )
    } )
  }

  sendMessage( event ) {
    event.preventDefault();

    let message = event.target.message

    socket.emit( 'nuevo mensaje', message.value )
  }

  render() {
    return(
      <Chat listAllMessages={this.listAllMessages}
            messages={store.getState().chatState.messages}
            users={store.getState().usersState.users}
            sendMessage={this.sendMessage} />
    )
  }
}

const mapStateToProps = ( store ) => {
  return {
    messages: store.chatState.messages,
    users: store.userState.users
  }
}

export default connect( mapStateToProps )( ChatContainer )
