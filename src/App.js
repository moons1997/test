import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home";
import Products from "./components/pages/Products/Products";
import Services from "./components/pages/Services/Services";
import SignUp from "./components/pages/SignUp/SignUp";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <Route path="/products" exact component={Products} />
            <Route path="/sigin-up" exact component={SignUp} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}
