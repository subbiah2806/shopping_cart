import React from 'react';
import { connect } from 'react-redux';
import { SET_CART, CHECKOUT } from '../actions'
import './Cart.scss';

const borderStyle1 = {
	border: 0,
	background: 'transparent',
	color: 'red',
};
const borderStyle2 = {
	border: 0,
	borderBottomRightRadius: '10px',
	borderTopLeftRadius: '10px',
}

const Cart = ({ CART, SET_CART, CHECKOUT }) => {
	const removeFromCart = (key) => {
		SET_CART({ ...CART[key], quantity: -CART[key].quantity });
	}
	const editChart = (key, type) => {
		SET_CART({ ...CART[key], quantity: type === 'sub' ? -1 : 1 });
	}
	const total = () => {
		let TOTAL = 0;
		CART.forEach(item => {
			TOTAL += item.price * item.quantity;
		});
		return TOTAL;
	}
	return (
		<div className="Cart">
			<div className="setMargin pb-5">
				<h2 className="title">CART</h2>
				<div className="products pl-md-5 py-5 p-0">
					{CART && CART.map((item, key) => {
						return (
							<h3 key={key} className="product py-4 py-md-2">
								<div className="class1">{`${key + 1}: ${item.name} =>`}</div>
								<div className="class2">
									{`${item.price} *`}
									<button className="mx-2" style={borderStyle1} onClick={() => editChart(key, 'sub')}>-</button>
									{item.quantity}
									<button className="mx-2" style={borderStyle1} onClick={() => editChart(key, 'add')}>+</button>
									{` = ${item.price * item.quantity}`}
									<button className="removeItem p-0" onClick={() => removeFromCart(key)}>+</button>
								</div>
							</h3>
						)
					})}
				</div>
				{CART.length > 0 &&
					<div>
						<h2 className="title">TOTAL: {total()}</h2>
						<button className="checkout" style={borderStyle2}><h2 className="m-0 p-0" onClick={CHECKOUT}>CHECKOUT</h2></button>
					</div>
				}
				{CART.length === 0 && <h2 className="title">CART is empty</h2>}
			</div>
		</div>
	)
}
const mapStateToProps = ({ CART }) => {
	return { CART };
}

export default connect(mapStateToProps, { SET_CART, CHECKOUT })(Cart);