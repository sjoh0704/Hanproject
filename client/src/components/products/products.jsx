import React, { memo, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Products = memo(({ product, productService, onError }) => {
  const history = useHistory();
  const {
    id,
    buyer_id,
    seller_id,
    fileurl,
    finishdate,
    name,
    price,
    description,
  } = product;
  const path = "/" + id;
  const gotoProductadd = product => {
    console.log("asd", product);
    history.push({
      pathname: "/productadd",
      state: { products: product[0] },
    });
  };
  const onClick = event => {
    productService
      .getProducts(id)
      .then(product => gotoProductadd(product))
      .catch(onError);
  };

  const Plus = async event => {
    productService.plusProduct(id, buyer_id);
    window.location.replace("/");
  };
  const remove = async event => {
    productService.removeProduct(id);
    window.location.replace("/");
  };
  useEffect(() => {});
  return (
    <>
      <section class="card">
        <Link to={path}>
          <img class="card-img-top" src={fileurl} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <span class="card-text">{price}</span>
            <span> - buyer_id : {buyer_id}</span>
            <p class="card-text">
              <small class="text-muted">{description}</small>
            </p>
            <span>종료시간 {finishdate}</span>
          </div>
        </Link>
      </section>
      <button onClick={Plus}>입찰하기</button>
      <button onClick={remove}>삭제하기</button>

      <button onClick={onClick}>상품 수정하기</button>

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
