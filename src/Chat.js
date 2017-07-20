import React, { Component } from 'react'

class Chat extends Component {
  render() {
    return(
      <div>
        <div>
          <div>
            {this.props.messages.map( ( message, index ) => {
              return(
                <div key={index}>
                  <strong key={index}>{message.usuario}</strong> -{message.mensaje}
                  <br/>
                </div>
              )
            } )}
          </div>

          <form id="formularioChat" onSubmit={this.props.sendMessage}>
            <div>
              <input type="text" name="message"/>
              <span>
                <input type="submit" value="enviar" />
              </span>
            </div>
          </form>
        </div>

        <div>
          <h4>Usuarios</h4>
          <div>
            {this.props.users.map( ( user, index ) => {
              return(
                <div key={index}>
                  {user}
                  <br/>
                </div>
              )
            } )}

          </div>
        </div>
      </div>
    )
  }
}

export default Chat
