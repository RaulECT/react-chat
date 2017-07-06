import React, { Component } from 'react'

class Chat extends Component {
  render() {
    return(
      <div>
        <div>
          <div>
            <strong>lmao</strong> -se ha conectado
            <br/>
            <strong>test2</strong> -se ha conectado
            <br/>
            <strong>lmao</strong> -Hay lmao
            <br/>
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
