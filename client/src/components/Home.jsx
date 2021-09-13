import React, { useEffect, useState } from "react";
import Products from "./Products";

const Home = ({ productService }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const username = undefined;
  useEffect(() => {
    productService
      .getProducts(username)
      .then(product => setProducts([...product]))
      .catch(onError);
  }, [productService]);

  const onError = error => {
    setError(error.toString());
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  console.log("pro", products);
  return (
    <>
      <ul>
        {products.map(product => (
          <Products key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};
export default Home;
