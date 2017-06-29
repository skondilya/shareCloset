// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Grabs the Routes
var Cart = require("./components/cart");
var ProductFeed = require("./components/Product-feed");
var Product = require("./components/product");



ReactDOM.render(
// Here we dump all of the components into a single main-container
// Again, treat them like they are any other HTML elements.
  <div className="main-container">
    <Cart />
    <ProductFeed />
    <Product />
  </div>
  , document.getElementById("app")
);