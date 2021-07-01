import React from "react";
import Header from "../UI/Header";
import Category from "./Category";
import Electronics from "./Electronics";
import Jewelery from "./Jewelery";
import Mens from "./Mens";
import Womens from "./Womens";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Category />
          </Route>
          <Route path="/electronics">
            <Electronics />
          </Route>
          <Route exact path="/jewelery">
            <Jewelery />
          </Route>
          <Route exact path="/mens">
            <Mens />
          </Route>
          <Route exact path="/womens">
            <Womens />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Home;
