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
    console.log("filechange!!!", file.url);
    const fileurls = file.url;

    setUrl(url => {
      return [...url, { fileurls }];
    });
  };

  console.log("hits", historyState);
  console.log("유아렐이다", url);
  const [product, setProduct] = useState({
    id: id,
    name: name,
    price: price,
    description: description,
    seller_id: seller_id,
    fileurl: fileurl,
  });

  console.log("프로적트다", product);
  const onSubmit = async event => {
    event.preventDefault();
    if (historyState.name) {
      productService
        .updateProduct(product)
        .then(() => {
          setProduct("");

          setTimeout(refresh, 200);
        })
        .catch(e => setError(e));
    } else {
      productService
        .postProduct(product)
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
          onChange={onChange}
        />
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

        <FileInput type="text" onFileChange={onFileChange} />
        <p>업로드된 사진</p>
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
