import React from "react";
import { Link }  from "react-router-dom";
import Services from "../Services";

const About = () => {
  return (
    <div className="about">
      <div className="aboutnav">
        <navbar>
        <Link to="/About/Products">Products</Link>
        <Link to="/About/Services">Services</Link>

          </navbar>
       
      </div>
      <div>
        <img scr="" className="logo" />
        </div>
        <h2>
          Layttcreations we are your Unique Afro-Urban Fashion online store
        </h2>
     

      
      
    </div>
  );
};

export default About;
