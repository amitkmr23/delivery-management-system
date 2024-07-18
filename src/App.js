import React from 'react';
import { Link } from 'react-router-dom';

const App = () => (
  <div style={styles.container}>
    <h1>Welcome to the Order Management System</h1>
    <div style={styles.links}>
      <Link to="/login" style={styles.link}>Login</Link>
      <Link to="/register" style={styles.link}>Register</Link>
    </div>
  </div>
);

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  link: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

export default App;









