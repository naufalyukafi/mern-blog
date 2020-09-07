import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
const MainApp = () => {
  return (
    <div>
      <p>Header</p>
      <Router>
        <Switch>
          <Route path="/createblog">
            <CreateBlog />
          </Route>
          <Route path="/detailblog">
            <DetailBlog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <p>Footer</p>
    </div>
  );
};

export default MainApp;
