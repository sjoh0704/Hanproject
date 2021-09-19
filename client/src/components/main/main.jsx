import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Products from "../products/products";

const Main = ({ productService, product_id }) => {
  const history = useHistory();
  console.log("히스토리", history);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    product_id
      ? productService
          .getProducts(product_id) // product_id인 상품 가져오기
          .then(product => setProducts([{ ...product }]))
          .catch(onError)
      : productService
          .getProducts() // 모든 상품 가져오기
          .then(product => setProducts([...product]))
          .catch(onError);
    const stopSync = productService.onSync(product => onCreated(product));
    return () => stopSync();
  }, [productService]);

  const onCreated = product => {
    setProducts(products => (products.length == 1 ? [product[0]] : product));

    // setProducts(products) : setProducts(product);
  };
  console.log("이건", products);

  const onError = error => {
    setError(error.toString());
    setTimeout(() => {
      setError("");
    }, 3000);
  };

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
