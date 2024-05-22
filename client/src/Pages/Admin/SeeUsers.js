import React, { useEffect, useState } from 'react';
import AdminNav from '../../Components/AdminNav';
import '../../Css/Admin/SeeUsers.css';

const SeeUsers = () => {
  const [users, setUsers] = useState([]);

  console.log(process.env.REACT_APP_API_URL);

  // Fetching the user data
  const getUsers = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/get-users`);
      const data = await response.json();
      if (data.success) {
        setUsers(data.userData);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  //for deleting user
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/delete-user/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.success) {
        alert('User deleted successfully');
        getUsers();
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <AdminNav />
      <div className="see-users-container">
        <h2 className="see-users-title">Users</h2>
        <table className="see-users-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user, index) => (
              <tr key={index}>
                <td>{user.UserFullname}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>
                  <button onClick={()=>deleteUser(user._id)}  className="user-dlt-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SeeUsers;
