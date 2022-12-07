import React from 'react';
import { Link } from 'react-router-dom';
import {products} from './ProductData';

const Products = () => {
  return (
    <div className="Products">
      <div className="products">
        <h2> Our Products</h2>
        <p>Welcome to the product page</p>
      </div>
    
      <div>
        {products.map((product) => {
          const { id, name, price } = product;
          console.log(id, name,price)
          return (
            <div className="card---margin--padd"key={product.id}  >
            
              <h3>
                {name}
              </h3>
              <p>
                #{price}
              </p>
              <Link to={`/details/${id}`}>More Info</Link>
            </div>
          )
        })}
      </div>
    </div>
  );
 
};

export default Products;



