import React from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import TopMenu from './TopMenu'

// Import Firebase-related dependencies
import db from "./firebase"
import { collection, query, getDocs } from "firebase/firestore";

// Import Navigate from react-router-dom
import { Navigate } from 'react-router-dom';

// Import the Toast component
import Toast from './Toast'

// Define the Login class component
class Login extends React.Component {

  constructor() {
    super();
    // Initialize the component state with email, password, and authentication status
    this.state = {
      email: "",
      password: "",
      authenticated: false,
      failed: false,
    };
  }

  // Function to handle the login process
  loginUser = async () => {
    // Query the 'users' collection in Firestore
    const first = query(collection(db, "users"));
    // Retrieve a snapshot of the data
    const snapshot = await getDocs(first);
    // Extract user data from the snapshot
    var users = snapshot.docs.map(doc => doc.data());

    // Iterate through the user data
    users.forEach(user => {
      if (this.state.email === user.email) {
        if (this.state.password === user.password) {
          // If email and password match, set authentication status to true
          this.setState({
            authenticated: true
          });
          return;
        }
      }

      // If login fails, reset the password field and set 'failed' flag to true
      this.setState({
        password: "",
        failed: true
      });
    });
  }

  // Function to update state based on input field changes
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // Render the component
  render() {
    // If authenticated, redirect to the home page '/'
    if (this.state.authenticated) {
      return <Navigate to='/' />;
    }

    return (
      <div>
        <TopMenu/>
        <Grid textAlign='center' style={{ height: '800px' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large'>
              <Segment textAlign='left'>
                <a style={{ textAlign: "right"}} href='/signup'>Sign Up</a>
                <br />
                Your email
                <Form.Input fluid onChange={this.updateInput} value={this.state.email} name="email" />
                Your password
                <Form.Input fluid type='password' onChange={this.updateInput} value={this.state.password} name="password" />
                <Button primary fluid onClick={this.loginUser}>
                  Login
                </Button>
              </Segment>
              {/* Render the Toast component if 'failed' flag is true */}
              {this.state.failed && <Toast />}
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

// Export the Login component as the default export
export default Login
