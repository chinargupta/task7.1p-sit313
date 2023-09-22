import React from 'react'
import { Button, Form, Grid, Input, Header, Segment } from 'semantic-ui-react'
import TopMenu from './TopMenu'

// Import Firebase-related dependencies
import db from "./firebase"
import { addDoc, collection } from 'firebase/firestore'

// Import Navigate from react-router-dom
import { Navigate } from 'react-router-dom';

// Define the Signup class component
class Signup extends React.Component {

  constructor() {
    super();
    // Initialize component state with empty values and a flag for redirection
    this.state = {
      name: "",
      lastname: "",
      email: "",
      password: "",
      redirect: false // This flag is used for redirection
    };
  }

  // Async function to handle the signup process
  signup = async () => {
    // Get a reference to the 'users' collection in Firestore
    const collectionRef = collection(db, 'users');

    // Create a payload object with user information from state
    const payload = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    }

    // Add the user data to the Firestore collection
    await addDoc(collectionRef, payload);

    // Set the 'redirect' flag to true to trigger a redirection
    this.setState({
      redirect: true
    });

    // Display a success alert
    alert("Sign up successfully!");
  }

  // Function to update state based on input field changes
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // Render the component
  render() {
    // If the 'redirect' flag is true, redirect to the '/login' route
    if (this.state.redirect) {
      return <Navigate to='/login' />;
    }

    return (
      <div>
        <TopMenu/>
        <Grid textAlign='center' style={{ height: '800px' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large'>
              <Segment textAlign='left'>
                <Header size='medium' color="blue">Create a DEV@Deakin Account</Header>
                <Form.Field inline required>
                  <label>Name</label>
                  <Input fluid name="name" placeholder='Name' onChange={this.updateInput} value={this.state.name} />
                </Form.Field>
                <Form.Field inline required>
                  <label>Last Name</label>
                  <Input fluid name="lastname" placeholder='Last Name' onChange={this.updateInput} value={this.state.lastname} />
                </Form.Field>
                <Form.Field inline required>
                  <label>Email</label>
                  <Input fluid name="email" placeholder='Email' onChange={this.updateInput} value={this.state.email} />
                </Form.Field>
                <Form.Field inline required>
                  <label>Password</label>
                  <Input fluid name="password" placeholder='Password' type='password' onChange={this.updateInput} value={this.state.password} />
                </Form.Field>
                <Button primary fluid onClick={this.signup}>
                  Create
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

// Export the Signup component as the default export
export default Signup
