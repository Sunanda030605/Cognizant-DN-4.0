import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let content;
  if (isLoggedIn) {
    content = <UserPage />;
  } else {
    content = <GuestPage />;
  }

  return (
    <div style={styles.container}>
      <h1>Ticket Booking App</h1>
      <div style={{ marginBottom: "15px" }}>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
      {content}
    </div>
  );
}

const styles = { container: { padding: "20px", fontFamily: "Arial", textAlign: "center" } };

export default App;
