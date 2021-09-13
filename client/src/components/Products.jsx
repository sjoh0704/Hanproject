import React, { memo } from "react";

const Products = memo(({ product }) => {
  const { id, seller_id, name, price, description } = product;
  const path = "/" + id;
  console.log(product);
  return (
    <>
      <section class="card">
        <img class="card-img-top" src="/logo192.png" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{price}</p>
          <p class="card-text">
            <small class="text-muted">{description}</small>
          </p>
        </div>
      </section>

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
