import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

// Define a class component called Toast
class Toast extends Component {
  // Initialize the component state with 'visible' set to true
  state = { visible: true }

  // Render method of the component
  render() {
    // Check if the 'visible' state is true
    if (this.state.visible) {
      // If 'visible' is true, render a Message component with a specific message
      return (
        <Message
          header='Login Failed' // Header of the message
          content='No Credentials Found, Please Try Again' // Content of the message
        />
      )
    }
  }
}

// Export the Toast component as the default export
export default Toast
