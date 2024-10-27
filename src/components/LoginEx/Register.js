import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const users=JSON.parse(localStorage.getItem('users'))||[];
        const isUserExist=users.some(user=>user.email===email);
        if(isUserExist){
            setErrorMessage('User already registered');

        }else{
            users.push({email,password});
            localStorage.setItem('users',JSON.stringify(users));
            navigate('/login')
        }
        // localStorage.setItem("registeredEmail", email);
        // localStorage.setItem("registeredPassword", password)
        
    }
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type='email' value={email} placeholder='Enter username' onChange={(e) => setEmail(e.target.value)} required/><br />
                <input type='password' value={password} placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} required/><br />
                {errorMessage&& <p style={{color:'red'}}>{errorMessage}</p>}
                <button type='submit'>Register</button>
            </form>
            <p>Already registred?<button onClick={() => navigate('/login')}>Login</button></p>
        </div>
    )
}

export default Register
