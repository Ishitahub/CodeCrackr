import React from 'react';
import './Header.css';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';

const Header = ({ toggleDarkMode, darkMode, toggleSidebar }) => {
  return (
    <header className="header">
      <button className="menu-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <h1 className="app-title">CodeCrackr</h1>
      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
        <span>{darkMode ? ' Light Mode' : ' Dark Mode'}</span>
      </button>
    </header>
  );
};

export default Header;










