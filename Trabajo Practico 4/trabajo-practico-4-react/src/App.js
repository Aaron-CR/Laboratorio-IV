import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/product-list" component={ProductList}></Route>
      <Route path="/product-details/:id" component={ProductDetails}></Route>
    </Switch>
  );
}

export default App;
