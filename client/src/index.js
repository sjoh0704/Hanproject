import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HttpClient from './network/http';
import ProductService from './service/product';

const baseURL = process.env.REACT_APP_BASE_URL;
console.log('base',baseURL);
const httpClient = new HttpClient(baseURL);
const productService = new ProductService(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App productService={productService}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
