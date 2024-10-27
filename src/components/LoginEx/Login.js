import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve the list of users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered email and password match any registered user
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Save a token to signify the user is logged in (for simplicity)
      localStorage.setItem('authToken', 'someAuthToken');

      // Navigate to the dashboard
      navigate('/dashboard');
    } else {
      // Show an error message if credentials are incorrect
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        Not registered? <button onClick={() => navigate('/register')}>Register</button>
      </p>
    </div>
  );
}

export default Login
