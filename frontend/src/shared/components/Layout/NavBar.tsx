import React, { useState } from 'react';
import './NavBar.css';

interface NavBarProps {
  children: React.ReactNode; // This allows the component to accept any React elements as children
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <header className="navbar">
      <h1>Safety Dashboard</h1>
      <button className="navbar__dropdown-btn" onClick={toggleDropdown}>
        Menu
      </button>
      {dropdownOpen && (
        <nav className="navbar__dropdown-menu">
          {children}
        </nav>
      )}
    </header>
  );
};

export default NavBar;
