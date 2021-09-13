import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = memo(({ product, productService }) => {
  const { id, seller_id, name, price, description } = product;
  const path = "/" + id;
  console.log(path);
  const onClick = async event => {
    event.preventDefault();
    productService.plusProduct(id);
  };
  return (
    <>
      <section class="card">
        <Link to={path}>
          <img class="card-img-top" src="/logo192.png" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{price}</p>
            <p class="card-text">
              <small class="text-muted">{description}</small>
            </p>
          </div>
        </Link>
      </section>
      <button onClick={onClick}>입찰하기</button>

      {/* <div>
        <img src="/logo192.png"></img>
        <li>{id}</li>
        <li>{seller_id}</li>
        <li>{name}</li>
        <li>{price}</li>
        <li>{description}</li>
      </div>
      <hr /> */}
    </>
  );
});

export default Products;
