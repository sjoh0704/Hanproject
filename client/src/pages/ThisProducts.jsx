import React from "react";
import { useParams } from "react-router";
import Home from "../components/Home";

const ThisProducts = ({ productService }) => {
  const { id } = useParams();

  return <Home productService={productService} product_id={id} />;
};

export default ThisProducts;
