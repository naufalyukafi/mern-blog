import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./mainApp.scss";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
import { Header } from "../../components";
import Footer from "../../components/molecules/Footer";
const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
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
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
