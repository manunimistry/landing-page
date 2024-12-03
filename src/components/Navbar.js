import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return ( 
    <div className="navbar">
      <h1 className="logo"><Link className="link" to="/">TechVantage</Link></h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰ 
      </button>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className='navul navli'>
          <li><Link className="link navli" to="/product">Product</Link></li>
          <li><Link className="link navli" to="/solutions">Solutions</Link></li>
          <li><Link className="link navli" to="/resources">Resources</Link></li>
          <li><Link className="link navli" to="/pricing">Pricing</Link></li>
          <li className="btn2">Log in</li>
          <li className="btn2 link navli"><button className="navbtn">Get started now</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
