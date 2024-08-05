import React from 'react';
import { Link } from 'react-router-dom';
import './NavLinks.css';

const NavLinks: React.FC = () => {
  return (
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
    </ul>
  );
};

export default NavLinks;
