import React from 'react';
import {connect} from 'react-redux';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.components';
import CartItem from '../cart-item/cart-item.components';

const CartDropdown = ({cartItem}) => (
	 <div className = 'cart-dropdown'>
	 	<div className ="cart-items">
	 		{
	 			cartItem.map(item => (
	 				<CartItem key = {item.id} item={item} />
	 				))
	 		}
	 	</div>
	 	<CustomButton>GO TO CHECKOUT</CustomButton>
	 </div>
	)

const mapStateToProps = ({cart: {cartItem}}) => ({
	cartItem,
})
export default connect(mapStateToProps)(CartDropdown);