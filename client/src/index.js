import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HttpClient from './network/http';
import ProductService from './service/product';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import Socket from './network/socket';

const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL);
const imageUploader = new ImageUploader();
const socketClient = new Socket(baseURL);
const productService = new ProductService(httpClient, socketClient);


const FileInput = props => (
<ImageFileInput {...props} imageUploader = {imageUploader}/>
);

ReactDOM.render(
  <React.StrictMode>
    <App productService={productService} FileInput={FileInput}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
