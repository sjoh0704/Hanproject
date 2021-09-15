import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const PrAdd = ({ FileInput, productService, onError }) => {
  const history = useHistory();
  const historyState =
    (history.location.state && history.location.state.products) || "";
  const { id, name, price, description, seller_id, fileurl } = historyState;

  const onFileChange = file => {
    console.log("file!!@#@!#", file);
    setProduct({
      ...product,
      fileurl: file.url,
    });
  };
  const [product, setProduct] = useState({
    id: id,
    name: name,
    price: price,
    description: description,
    seller_id: seller_id,
    fileurl: fileurl,
  });
  const onSubmit = async event => {
    event.preventDefault();
    (historyState.name &&
      productService
        .updateProduct(product)
        .then(created => {
          setProduct("");
          history.push("/");
        })
        .catch(onError)) ||
      productService
        .postProduct(product)
        .then(created => {
          setProduct("");
          history.push("/");
        })
        .catch(onError);
  };

  //   useEffect(() => {

  //   }, [productService, product_id]);

  const onChange = event => {
    console.log("product", product);
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <>
      <form className="product-form" onSubmit={onSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Edit product name"
          value={product.name}
          required
          autoFocus
          onChange={onChange}
        />
        <input
          name="price"
          type="text"
          placeholder="Edit product price"
          value={product.price}
          required
          autoFocus
          onChange={onChange}
        />
        <input
          name="description"
          type="text"
          placeholder="Edit product description"
          value={product.description}
          required
          autoFocus
          onChange={onChange}
        />
        <input
          name="seller_id"
          type="text"
          placeholder="Edit seller_id"
          value={product.seller_id}
          required
          autoFocus
          onChange={onChange}
        />

        <FileInput type="text" onFileChange={onFileChange} />
        <button className="form-btn">Post</button>
      </form>
    </>
  );
};

export default PrAdd;
