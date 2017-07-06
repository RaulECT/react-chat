import React, { Component } from 'react'

class Chat extends Component {
  render() {
    return(
      <div>
        <div>
          <div>
            {this.props.messages.map( ( message, index ) => {
              return(
                <div>
                  <strong key={index}>{message.usuario}</strong> -{message.mensaje}
                  <br/>
                </div>
              )
            } )}
          </div>

          <form id="formularioChat">
            <div>
              <input type="text" />
              <span>
                <button>Enviar</button>
              </span>
            </div>
          </form>
        </div>

        <div>
          <h4>Usuarios</h4>
          <div>lmao<br/>test2<br/></div>
        </div>
      </div>
    )
  }
}

export default Chat
