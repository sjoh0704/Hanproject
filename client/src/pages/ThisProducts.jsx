import React from "react";
import { useParams } from "react-router";
import Main from "../components/main/main";
import Products from "../components/products/products";

const ThisProducts = ({ productService }) => {
  const { id } = useParams();

  return <Main productService={productService} product_id={id} />;
};

export default ThisProducts;
