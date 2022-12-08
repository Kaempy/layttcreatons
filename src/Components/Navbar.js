import React from "react";
import { Link } from "react-router-dom";
// import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className ="navheader">
        <img src="../images/logo1.png" alt = "logo" className ="App-logo"/>
        </div>
        {/* <h1>Layttcreations</h1> */}
        <div className="links">
          <Link to="/">HOME</Link>
          <Link to="About">ABOUT US</Link>
          <Link to="Contact">CONTACT US</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
