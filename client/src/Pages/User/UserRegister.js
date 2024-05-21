import React, { useState } from 'react';
import '../../Css/User/UserRegister.css';
import { Link } from 'react-router-dom';
import UserNav from '../../Components/UserNav';

const UserRegister = () => {
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const apiUrl = "http://localhost:4000"

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
  
    // Implement your registration logic here
    try {
      const fetchApi = await fetch(`${apiUrl}/register-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName,
          contact,
          email,
          password
        })
      });
  
      const register = await fetchApi.json();
  
      if (register.success) {
        alert("Registered successfully");
        setFullName("");
        setContact("");
        setEmail("");
        setPassword("");
      } else {
        alert("Registration unsuccessful");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  

  return (
    <>
    <UserNav />
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <h1>Register</h1>
        <div className="input-container">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="contact">Contact</label>
          <input
            type="number"
            id="contact"
            name="contact"
            value={contact}
            onChange={handleContactChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="btn-register">Register</button>
        <p>Already have account? <Link className='login-account' to={'/login'}>Login</Link></p>
      </form>
    </div>
    </>
  );
};

export default UserRegister;
