import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = memo(({ product, productService }) => {
  const { id, seller_id, name, price, description } = product;
  const path = "/" + id;
  console.log(path);
  const Plus = async event => {
    // event.preventDefault();
    productService.plusProduct(id);
    window.location.replace("/");
  };
  const remove = async event => {
    // event.preventDefault();
    productService.removeProduct(id);

    window.location.replace("/");
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
      <button onClick={Plus}>입찰하기</button>
      <button onClick={remove}>삭제하기</button>

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
