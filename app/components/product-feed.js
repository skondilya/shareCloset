// Include React
var React = require("react");

var ProductsList = React.createClass({

	render : function(){

		var products = this.props.data.map(function(product){
			return (
				<li>
				<Product data={product}>
				</li>
				)
		});
		return (
			<ul>{products}</ul>
		)
	}
});

// Export the component back for use in other files
module.exports = Product-feed;

