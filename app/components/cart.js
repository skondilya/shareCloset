var Cart = React.createClass({

	getInitialState : function(){
		return {
			items: [],
			total : 0,
			currency : 'USD'
		}
	},

	addItem : function(e,item){
		this.state.items.push(item);
		this.counttotal();
	},
	
	removeItem : function(e,itemId){
		var itemindex;
		this.state.items.some(function(item,index){
			if(item.id ==itemId){
				itemindex = index;
				return true;
			}
		})
	}
})