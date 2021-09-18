import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../products/products";

const Main = ({ productService, product_id }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    product_id
      ? productService
          .getProducts(product_id)
          .then(product => setProducts([{ ...product }]))
          .catch(onError)
      : productService
          .getProducts()
          .then(product => setProducts([...product]))
          .catch(onError);

    const stopSync = productService.onSync(product => onCreated(product));
    return () => stopSync();
  }, [productService]);

  const onCreated = product => {
    setProducts([product]);
  };
  const onError = error => {
    setError(error.toString());
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  console.log("pro", products);

  return (
    <>
      {products.length !== 1 ? (
        <Link to="/productadd">
          <button>상품등록하기</button>
        </Link>
      ) : null}
      <ul>
        {products.map(product => (
          <Products
            productService={productService}
            key={product.id}
            product={product}
            onError={onError}
          />
        ))}
      </ul>
    </>
  );
};
export default Main;
