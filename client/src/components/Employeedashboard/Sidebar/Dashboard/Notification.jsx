import React, { useState } from 'react';

const Notification = ({ notifications }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const notificationCount = notifications.length;

  const handleBellClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div style={dashboardStyles}>
      <div style={notificationContainerStyles}>
        <div style={notificationCountStyles} onClick={handleBellClick}>
          {notificationCount >= 0 && (
            <span>

              <i className="fas fa-bell"></i> {notificationCount}
            </span>
          )}
        </div>
        {isDropdownOpen && (
          <div style={notificationDropdownStyles}>
            {notifications.map((notification) => (
              <div key={notification.id} style={notificationCardStyles}>
                <div style={iconStyles}>{notification.icon}</div>
                {notification.message}
                <div style={dateStyles}>{new Date(notification.timestamp).toLocaleString()}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const dashboardStyles = {
  margin: '10px',
  backgroundColor: '#fff',
  borderRadius: '20px',
  boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
  padding: '10px',
  marginBottom: 'auto',
};

const notificationContainerStyles = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const notificationCountStyles = {
  marginBottom: '10px',
  fontSize: '18px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const notificationDropdownStyles = {
  position: 'absolute',
  top: '100%',
  right: "10px",
  backgroundColor: '#fff',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  marginTop: '15px',
};

const notificationCardStyles = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  width: '200px',
};

const iconStyles = {
  fontSize: '24px',
  marginRight: '10px',
};

const dateStyles = {
  color: '#555',
  fontSize: '12px',
};

export default Notification;
