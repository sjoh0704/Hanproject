import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const PrAdd = ({ FileInput, productService }) => {
  const history = useHistory();
  const historyState = history.location.state
    ? history.location.state.products
    : "";
  const { id, name, price, description, seller_id, fileurl } = historyState;
  const [error, setError] = useState("");
  const [url, setUrl] = useState([]);
  const refresh = () => {
    window.location.replace("/");
  };
  const onFileChange = file => {
    const fileurls = file.url;
    setUrl(url => {
      return [...url, { fileurls }];
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
    if (historyState.name) {
      //상품 정보가 넘어왔다면
      productService
        .updateProduct(product) // 상품 수정
        .then(() => {
          setProduct("");

          setTimeout(refresh, 200);
        })
        .catch(e => setError(e));
    } else {
      productService
        .postProduct(product) // 상품 정보가 안 넘어왔다면 상품 생성
        .then(() => {
          setProduct("");
          setTimeout(refresh, 200);
        })
        .catch(e => setError(e));
    }
  };

  const erroralert = () => {
    error && alert(`${error}`);
  };

  useEffect(() => {
    erroralert();
    setProduct(product => {
      return {
        ...product,
        fileurl: url,
      };
    });
  }, [error, url]);

  const onChange = event => {
    console.log("pr", product, event);
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
        {historyState.name ? (
          <input
            name="price"
            type="text"
            placeholder="Edit product price"
            value={product.price}
            required
            readOnly
            onChange={onChange}
          />
        ) : (
          <input
            name="price"
            type="text"
            placeholder="Edit product price"
            value={product.price}
            required
            onChange={onChange}
          />
        )}

        <input
          name="description"
          type="text"
          placeholder="Edit product description"
          value={product.description}
          required
          onChange={onChange}
        />
        <input
          name="seller_id"
          type="text"
          placeholder="Edit seller_id"
          value={product.seller_id}
          required
          onChange={onChange}
        />
        {historyState.name ? (
          ""
        ) : (
          <FileInput type="text" onFileChange={onFileChange} />
        )}

        <p>한번 등록된 상품 사진과 금액은 수정이 불가능합니다.</p>
        <p>현재 등록된 이미지</p>
        {product.fileurl &&
          product.fileurl.map(url => {
            return <img src={url.fileurls} />;
          })}
        {/* <img src={url.fileurls} /> */}
        <button className="form-btn">Post</button>
      </form>
    </>
  );
};

export default PrAdd;
