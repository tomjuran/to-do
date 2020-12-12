import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: "white",
        textDecoration: "none",
    }


  return (
    <nav>
        <Link style={navStyle} to="/">
            <li>TK Flooring</li>
        </Link>
        <ul className="nav-links" marginRight="1px" >

            <Link style={navStyle} to="/about">
              <li>About</li>
            </Link>
            <Link style={navStyle} to="/vinyl">
              <li>Vinyl</li>
            </Link>
            <Link style={navStyle} to="/eng">
              <li>Engineered Hardwood</li>
            </Link>
            <Link style={navStyle} to="/hardwood">
              <li>Hardwood</li>
            </Link>
            <Link style={navStyle} to="/lam">
              <li>Laminate</li>
            </Link>
            <Link style={navStyle} to="/contact">
              <li>Contact</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
