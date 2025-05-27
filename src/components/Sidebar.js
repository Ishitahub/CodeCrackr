import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../styles.css';

const Sidebar = ({ visible, toggleSidebar, toggleDarkMode, darkMode }) => {
  return (
    <>
      <button onClick={toggleSidebar} className="hamburger-icon">
        <FaBars />
      </button>
      <div className={`sidebar ${visible ? 'visible' : ''}`}>
        <nav className="sidebar-nav">
          <ul>
            <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
            <li><Link to="/practice" onClick={toggleSidebar}>Practice</Link></li>
            <li><Link to="/leaderboard" onClick={toggleSidebar}>Leaderboard</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
          </ul>
        </nav>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </>
  );
};

export default Sidebar;



















