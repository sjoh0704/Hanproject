import React, { memo } from "react";
import { Link, useHistory } from "react-router-dom";

const Products = memo(({ product, productService, onError, oneproduct }) => {
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
      .getProducts(id) // id에 맞는 상품 들고오기
      .then(product => gotoProductadd(product))
      .catch(onError);
  };

  const refresh = () => {
    window.location.replace("/");
  };

  const Plus = async () => {
    productService.plusProduct(id, buyer_id); // 입찰시 금액 10% 추가
  };
  const remove = async () => {
    productService.removeProduct(id); // id 찾아서 그 상품 삭제
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

            {(oneproduct && (
              <>
                <span className="card-text">{price}</span>
                <h3> - buyer_id : {buyer_id}</h3>
                <button onClick={Plus}>
                  {parseInt(price * 1.1)}원에 입찰하기
                </button>
              </>
            )) || (
              <span>
                입찰은 상품 상세에서 가능합니다. 현재 금액을 보시거나
                입찰하시려면 상품을 클릭하세요
              </span>
            )}

            <p className="card-text">
              <small className="text-muted">{description}</small>
            </p>
            <span>종료시간 {finishdate}</span>
          </div>
        </Link>
      </section>

      <button onClick={remove}>삭제하기</button>

      <button onClick={onClick}>상품 수정하기</button>
      <hr />
    </>
  );
});

export default Products;
