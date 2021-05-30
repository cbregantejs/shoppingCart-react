import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Store from '../pages/store';
import NotFound from '../pages/NotFound';
import ProductDetail from "../pages/product/ProductDetail";

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Store}/>
          <Route exact path="/product/:id" component={ ProductDetail } />
          <Route path="*" component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;