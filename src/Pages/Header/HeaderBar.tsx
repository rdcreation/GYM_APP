
import React from 'react';
import './HeaderBar.css';
import { Link } from 'react-router-dom';

export const HeaderBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/Create">Create</Link></li>
        <li><Link to="/details">Details</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};


