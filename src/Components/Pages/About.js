import React from "react";
import { Link, Outlet } from "react-router-dom";
import Services from "../Services";

const About = () => {
  return (
    <div className="about">
      <div className="aboutnav">
        <Link to="/About/Products">Products</Link>
        <Link to="/About/Services">Services</Link>
      </div>
      
        <h2>
          Layttcreations we are your Unique Afro-Urban Fashion online store
        </h2>
     

      
      <Outlet />
    </div>
  );
};

export default About;
