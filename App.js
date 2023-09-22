// Import the TopMenu component from the './TopMenu' file
import TopMenu from './TopMenu'
// Import the React library
import React from 'react';

// Define the App functional component
function App() {
  return (
    // Render a div with the className "App"
    <div className="App">
      {/* Render the TopMenu component within the div */}
      <TopMenu />
    </div>
  );
}

// Export the App component as the default export
export default App;
