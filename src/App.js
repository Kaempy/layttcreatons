import React,{useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ErrorBoundary from './Components/ErrorBoundary';
import axios from 'axios';

// pages
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Products from './Components/Products';
import Services from './Components/Services';
import Users from './Components/Users';
import PageNotFound from './Components/PageNotFound';
import ProductDetails from './Components/ProductDetails';
import Pagination from './Components/Pagination';

function App() {
  const [details, setDetails] = useState([]);
  const { loading, setLoading } = useState(false);
  const { currentPage, setCurrentPage } = useState(1);
  const { detailsPerPage } = useState(10);

  useEffect(() => {

    const fetchUser = async () => {
      const { data } = await axios.get('https://randomuser.me/api/', {
        params: {
          results: 50,
        }
      })
      setDetails(data.results);
      setLoading(false);
    }
    fetchUser();
  }, [])


  //getting the last users index
  const indexOfLastUser = currentPage * detailsPerPage;
  const indexOfFirstUser = indexOfLastUser - detailsPerPage;
  const currentUser = details.slice(indexOfFirstUser,indexOfLastUser);

  //to change page
  const paginate = (pageNumber) =>setCurrentPage(pageNumber)
  


  return (
    <div className="App">
      <Users />
      <Pagination/>

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
        <Route path="users" element={<Users />}/>
        <Route path="*" element={<PageNotFound/>}/>
           
        </Routes>
        </ErrorBoundary>
    </div>
  );
};

export default App;
