import React, { useState } from "react";
import { auth } from "./firebase"; // Import auth from your Firebase module

function App() {
  // Define state variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle the login process
  const handleLogin = async () => {
    try {
      // Attempt to sign in using the provided email and password
      await auth.signInWithEmailAndPassword(email, password);
      console.log("Logged in successfully!");
    } catch (error) {
      // If there's an error during login, log the error message
      console.error("Error logging in: ", error);
    }
  };

  // The rest of your component code goes here...

  // Return your JSX component here
}

// Export your App component for use in other parts of your application
export default App;
