import React, {useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from './ProductData';

const ProductDetails = () => {
  const [name , setName] = useState("");
  const [price , setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [moq , setMoq] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const thisProduct = products.find((product) => product.id === parseInt(id));
    setName(thisProduct.name);
    setPrice(thisProduct.price);
    setDescription(thisProduct.description);
    setMoq(thisProduct.moq);
  });
  return (
    <div className="Container">
      <h2>{name}</h2>
      <hr />
      <b>#:{price}</b>
      <br />
      <p>{description}</p>
      <br />
      <p>{moq}</p>

      <Link to="About/Products">Back to Products......</Link>

    </div>
  );
};

export default ProductDetails;