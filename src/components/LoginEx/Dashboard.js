import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate=useNavigate();
    const handleLogout=(e)=>{
        e.preventDefault();
        localStorage.removeItem('authToken');
        navigate('/login')
    }
  return (
    <div>
      <h2>Welcome to Dashboard page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
