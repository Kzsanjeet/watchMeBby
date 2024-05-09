import React from 'react';
import '../Css/User/UserNav.css';
import { Link } from 'react-router-dom';

const UserNav = () => {
  return (
    <nav className="user-nav">
      <Link to={'/'} className="logo">watchMe<span className='theme-color'>Bby</span></Link>
      <ul className="nav-links">
        <li>
          <Link  to={'#'} >   
            Profile
          </Link>
        </li>
        <li>
          <Link to={'/login'}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
