import React from 'react';
import logo from '../img/logo.png';

const Navbar = ({ activePage, setActivePage }) => {
  const navItems = ['Home', 'About', 'Download', 'Features', 'Documentation'];

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <p className="logo-text" >L S B <br/>SECRET</p>
      </div>
      <div className="nav_items">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActivePage(item)}
            className={`nav-button ${activePage === item ? 'active' : ''}`}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;


