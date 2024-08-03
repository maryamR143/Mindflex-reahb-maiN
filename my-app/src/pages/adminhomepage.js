import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css'; // Custom styles

const UserList = () => {
  // State to manage users and modal visibility
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Dummy user data
  const dummyUsers = [
    { id: 1, name: 'John Doe', role: 'Doctor', department: 'Cardiology', contact: 'johndoe@example.com', lastLogin: '2024-05-10', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'Nurse', department: 'Pediatrics', contact: 'janesmith@example.com', lastLogin: '2024-05-09', status: 'Active' }
  ];

  useEffect(() => {
    // Fetch user data (dummy data here for demonstration)
    setUsers(dummyUsers);
  }, []);

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.php" className="navbar-brand p-0">
          <h1 className="m-0 text-primary"><i className="fa fa-brain me-2"></i>Mindflex Rehabilitation</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="adminhomepage.html" className="nav-item nav-link">All users</a>
            <a href="doctorslist.html" className="nav-item nav-link">Doctors</a>
            <a href="about.html" className="nav-item nav-link">Requests</a>
            <a href="service.html" className="nav-item nav-link">Appointment List</a>
            <a href="service.html" className="nav-item nav-link">Logout</a>
          </div>
        </div>
      </nav>

      <header>
        <h1>User List</h1>
      </header>

      <main className="p-3">
        <input type="text" id="searchInput" className="form-control mb-3" placeholder="Search users..." />
        <table id="userTable" className="table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Department</th>
              <th>Contact Information</th>
              <th>Last Login</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.department}</td>
                <td>{user.contact}</td>
                <td>{user.lastLogin}</td>
                <td>{user.status}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => handleOpenModal(user)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {showModal && selectedUser && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">User Details</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p><strong>Name:</strong> {selectedUser.name}</p>
                <p><strong>Role:</strong> {selectedUser.role}</p>
                <p><strong>Department:</strong> {selectedUser.department}</p>
                <p><strong>Contact Information:</strong> {selectedUser.contact}</p>
                <p><strong>Last Login:</strong> {selectedUser.lastLogin}</p>
                <p><strong>Status:</strong> {selectedUser.status}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
