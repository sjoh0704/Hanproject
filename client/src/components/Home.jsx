import React, { useEffect, useState } from "react";
import Products from "./Products";

const Home = ({ productService, product_id }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    productService
      .getProducts(product_id)
      .then(product => setProducts([...product]))
      .catch(onError);
  }, [productService, product_id]);

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
          <Products
            productService={productService}
            key={product.id}
            product={product}
          />
        ))}
      </ul>
    </>
  );
};
export default Home;
