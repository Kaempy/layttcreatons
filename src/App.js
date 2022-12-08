import React,{useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ErrorBoundary from './Components/ErrorBoundary';


// pages
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Products from './Components/Products';
import Services from './Components/Services';
// import Users from './Components/Users';
import PageNotFound from './Components/PageNotFound';
import ProductDetails from './Components/ProductDetails';


function App() {
  

  return (
    <div className="App">
    
      <ErrorBoundary>

       <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />} >
              <Route path="products" element={<Products />} />
              <Route path="services" element={<Services />} />
              </Route>
         <Route path="/details/:id" element={<ProductDetails/>}/>
          
        <Route path="contact" element={<Contact />}/>
        {/* <Route path="users" element={<Users />}/> */}
        <Route path="*" element={<PageNotFound/>}/>
           
        </Routes>
        </ErrorBoundary>
    </div>
  );
};

export default App;
