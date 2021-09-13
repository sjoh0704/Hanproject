import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import ThisProducts from "./pages/ThisProducts";

const App = ({ productService }) => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <AllProducts productService={productService} />;
          </Route>
          <Route exact path="/:id">
            <h1>zz</h1>
            <ThisProducts productService={productService} />;
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
