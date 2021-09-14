import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/productadd">
        <button>상품등록하기</button>
      </Link>
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
