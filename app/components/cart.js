// Include React
var React = require("react");

var cart = React.createClass({

	// getInitialState : function(){
	// 	return {
	// 		items: [],
	// 		total : 0,
	// 		currency : 'USD'
	// 	}
	// },

	// addItem : function(e,item){
	// 	this.state.items.push(item);
	// 	this.counttotal();
	// },

	// removeItem : function(e,itemId){
	// 	var itemindex;
	// 	this.state.items.some(function(item,index){
	// 		if(item.id ==itemId){
	// 			itemindex = index;
	// 			return true;
	// 		}
	// 	})
	// 	if(typeof itemId != 'undefined'){
	// 		this.state.items.splice(itemindex ,1);
	// 	}
	// },
	// countTotal : function(){
	// 	var total = 0;
	// 	this.state.items.forEach(function(item , index){
	// 		total = total + item.price;
	// 	})
	// 	this.setstate({total : total})
	// },

	render : function(){
		// var items = this.state.items.map(function(item){
		return (
				<p>Hello World!</p>


		)
	
	}
});

// Export the component back for use in other files
module.exports = cart;