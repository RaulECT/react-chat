import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import io from 'socket.io-client'

let socket = io(`https://chatsocketsio.herokuapp.com/`)

class ChatContainer extends Component {
  constructor() {

  }
}
