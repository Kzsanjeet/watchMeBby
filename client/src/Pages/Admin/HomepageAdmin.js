import React from 'react';
import AdminNav from '../../Components/AdminNav';
import '../../Css/Admin/AdminHomepage.css';
import { Link } from 'react-router-dom';


const HomepageAdmin = () => {
  // Placeholder data for total users and total movies
  const totalUsers = 1000;
  const totalMovies = 500;

  return (
    <>
      <AdminNav />
      <div className="dashboard-container">
        <h1>Welcome to Admin Dashboard</h1>
        <div className="dashboard-stats">
          <div className="dashboard-stat">
            <h2>Total Users</h2>
            <p>{totalUsers}</p>
          </div>
          <div className="dashboard-stat">
            <h2>Total Movies</h2>
            <p>{totalMovies}</p>
          </div>
          {/* Add more dashboard stats here */}
        </div>
        <div className="dashboard-content">
          {/* Add your dashboard content here */}
          <div className="dashboard-card">
            <h2>See Users</h2>
            <p>View and manage users.</p>
          </div>
          <div className="dashboard-card">
            <h2>See Movies</h2>
            <p>Explore the movie database.</p>
          </div>
          <div className="dashboard-card">
            <Link style={{textDecoration:"none" }} to={'/admin/add-movie'}><h2>Add Movies</h2></Link>
            <p>Add new movies to the database.</p>
          </div>
          {/* Add more dashboard cards for other functionalities */}
        </div>
      </div>
    </>
  );
};

export default HomepageAdmin;
