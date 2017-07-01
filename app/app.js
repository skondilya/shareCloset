// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Grabs the Routes
var routes = require("./config/routes");

// Renders the contents according to the route page
// Displays the contents in the div app of index.html
// Note how ReactDOM takes in two parameters (the contents and the location)
ReactDOM.render(routes, document.getElementById("app"));
// Grabs the Routes
// var Cart = require("./components/cart");
// var ProductFeed = require("./components/Product-feed");
// var Product = require("./components/product");
// // import header from './components/header';
// // import footer from './components/footer';


// ReactDOM.render(
// // Here we dump all of the components into a single main-container
// // Again, treat them like they are any other HTML elements.
//   <div className="main-container">
//  <Cart />
//  <ProductFeed />
//  <Product />

//   </div>
//   , document.getElementById("app")
// );