// Include React
var React = require("react");

var ProductsList = React.createClass({

	render : function(){
		const { name, price, currency, image, url, isInCart } = this.props;
		
		return (
			<div className="product thumbnail">
                <img src={image} alt="product" />
                <div className="caption">
                    <h3>
                        <a href={url}>{name}</a>
                    </h3>
                    <div className="product__price">{price} {currency}</div>
                    <div className="product__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
		)
	}
})