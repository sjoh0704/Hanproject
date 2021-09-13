import React from "react";
import Home from "./components/Home";
import AllProducts from "./pages/AllProducts";

const App = ({ productService }) => {
  return <AllProducts productService={productService} />;
};

export default App;
