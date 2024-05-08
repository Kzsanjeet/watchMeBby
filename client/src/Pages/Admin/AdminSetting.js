import React from 'react';
import { Link } from 'react-router-dom';

import '../../Css/Admin/AdminSetting.css';
import AdminNav from '../../Components/AdminNav';


const AdminSetting = () => {
 

  const handleLogout = () => {
    // Perform logout logic here
    // localStorage.removeItem('adminAuthToken');
  };

  return (
    <>
        <AdminNav/>
        <div>
            <h2>Admin Settings</h2>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <Link to="/admin/login">Logout</Link>
        </div>
    </>
  );
};

export default AdminSetting;
