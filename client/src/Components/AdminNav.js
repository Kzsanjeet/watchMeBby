import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Admin/AdminNav.css';

const AdminNav = () => {
  return (
    <nav className="admin-nav">
      <div className="admin-logo">
        <p>
            <Link to="/admin/home" className="logo-link">
                watchMeBby
            </Link>
        </p>
      </div>
      <ul className="admin-links">
        <li>
          <Link to="/admin/users">See Users</Link>
        </li>
        <li>
          <Link to="/admin/movies">See Movies</Link>
        </li>
        <li>
          <Link to="/admin/add-movie">Add Movie</Link>
        </li>
        <li>
          <Link to="/admin/add-featured">Add Featured Movies</Link>
        </li>
        <li>
          <Link to="/admin/add-trending">Add Trending Movies</Link>
        </li>
        <li>
          <Link to="/admin/add-for-you">Add For You Movies</Link>
        </li>
        <li>
          <Link to="/admin/setting">Setting</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
