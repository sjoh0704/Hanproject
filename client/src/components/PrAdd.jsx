import React, { useState } from "react";

const PrAdd = ({ productService, onError }) => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    seller_id: 0,
  });
  const onSubmit = async event => {
    event.preventDefault();
    productService
      .postProduct(product)
      .then(created => {
        console.log("product", product);
        setProduct("");
        window.location.replace("/");
      })
      .catch(onError);
  };

  const onChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
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
      <button type="submit" className="form-btn">
        Post
      </button>
    </form>
  );
};

export default PrAdd;
