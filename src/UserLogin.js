import React, { Component } from 'react'

class UserLogin extends Component {

  render() {
    return(
      <div>
        <h1>Chact.IO</h1>
        <br/>
        <form onSubmit={this.props.login}>
          <input type="text" placeholder="User Name" name="name" />
          <input type="submit" value="enviar" />
        </form>
      </div>
    )
  }
}

export default UserLogin
