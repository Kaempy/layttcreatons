import React, {useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from './ProductData';

const ProductDetails = () => {
  const [name , setName] = useState("");
  const [price , setPrice] = useState("");
  const [description , setDescription] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const thisProduct = products.find((product) => product.id === parseInt(id))
    setName(thisProduct.name)
    setPrice(thisProduct.price)
    setDescription(thisProduct.description)
  });
  return (
    <div className="Container">
      <h2>{name}</h2>
      <hr />
      <b>#:{price}</b>
      <br />
      <p>{description}</p>

    </div>
  )
};

export default ProductDetails;