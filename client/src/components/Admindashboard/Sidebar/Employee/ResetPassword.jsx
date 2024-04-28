import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post('http://localhost:8080/api/changepasswordemp', {
        email,
        currentPassword,
        newPassword,
      });

      if (response.data.success) {

        toast.success('Password changed successfully.');


        setTimeout(() => {
          window.location.href = '/';
        }, 5000);
      } else {

        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);

      toast.error('An error occurred during password change.');
    }
  };

  return (<>

    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Change Password</h2>
        {message && <p style={styles.message}>{message}</p>}
        <form onSubmit={handleChangePassword}>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Current Password:</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Change Password
          </button>
        </form>
        <p>
          Remember your password? <Link to="/Loginpage">Sign In</Link>
        </p>
      </div>
    </div>
  </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f7f6',
  },
  card: {
    width: '500px',
    padding: '30px',
    border: '1px solid #e1e1e1',
    borderRadius: '5px',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  heading: {
    color: 'black',
    margin: '0',
    textAlign: 'center',
    marginBottom: '20px',
  },
  message: {
    color: '#555',
    marginBottom: '20px',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    backgroundColor: 'black',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ResetPassword;
