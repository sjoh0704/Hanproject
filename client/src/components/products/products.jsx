import React, { memo } from "react";
import { Link, useHistory } from "react-router-dom";

const Products = memo(({ product, productService, onError }) => {
  const history = useHistory();
  const {
    id,
    buyer_id,
    // seller_id,
    fileurl,
    finishdate,
    name,
    price,
    description,
  } = product;
  const path = "/" + id;
  const gotoProductadd = product => {
    history.push({
      pathname: "/productadd",
      state: { products: product },
    });
  };
  const onClick = event => {
    productService
      .getProducts(id)
      .then(product => gotoProductadd(product))
      .catch(onError);
  };

  const refresh = () => {
    window.location.replace("/");
  };

  const Plus = async () => {
    productService.plusProduct(id, buyer_id);
    setTimeout(refresh, 200);
  };
  const remove = async () => {
    productService.removeProduct(id);
    setTimeout(refresh, 200);
  };
  return (
    <>
      <section className="card">
        <Link to={path}>
          {fileurl.map(url => {
            return (
              <img
                key={Math.random()}
                className="card-img-top"
                src={url.fileurls}
                alt="Card image cap"
              />
            );
          })}
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <span className="card-text">{price}</span>
            <span> - buyer_id : {buyer_id}</span>
            <p className="card-text">
              <small className="text-muted">{description}</small>
            </p>
            <span>종료시간 {finishdate}</span>
          </div>
        </Link>
      </section>
      <button onClick={Plus}>{parseInt(price * 1.1)}원에 입찰하기</button>
      <button onClick={remove}>삭제하기</button>

      <button onClick={onClick}>상품 수정하기</button>
      <hr />
    </>
  );
});

export default Products;
