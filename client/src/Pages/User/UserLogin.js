import React, { useState } from 'react';
import '../../Css/User/UserLogin.css';
import { Link } from 'react-router-dom';
import UserNav from '../../Components/UserNav';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const apiUrl = "http://localhost:4000"

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    // Implement your login logic here
    try {
      console.log('Email:', email);
      console.log('Password:', password);
  
      const fetchApi = await fetch(`${apiUrl}/login-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });
  
      const login = await fetchApi.json();
  
      if (login.success) {
        alert("Login successful");
        setEmail("");
        setPassword("");
      } else {
        alert("Login unsuccessful");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  

  return (
    <>
    <UserNav />
    <div className="login-container">
      <div className="login-header">
        <h2>watchMe<span className='theme-color'>Bby</span></h2>
        
      </div>
      <form onSubmit={handleLogin} className="login-form">
        <h1>Sign In</h1>
        <div className="input-container">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email or phone number"
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn-login">Sign In</button>
        <Link to={'#'} className="forgot-password">Forgot your password?</Link>
      </form>
      <div className="signup-info">
        <p>New to watchMeBby? <Link to={'/register'}>Sign up now.</Link></p>
      </div>
    </div>
    </>
  );
};

export default UserLogin;
