import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Product from './pages/admin/Product';
import ProductList from './pages/client/product/ProductList'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Product} />
        <Route path="/products" exact component={ProductList} />
      </Router>
    );
  }
}

export default App;
