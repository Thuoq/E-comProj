import React from 'react';
import {connect} from 'react-redux';
import './cart-dropdown.styles.scss';

import { withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.components';
import CartItem from '../cart-item/cart-item.components';
import {selectorCartItem} from "../../redux/cart/cart.selector";
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden}  from '../../redux/cart/cart.action';


const CartDropdown = ({cartItem,history,dispatch}) => (
	 <div className = 'cart-dropdown'>
	 	<div className ="cart-items">
	 		{
	 			cartItem.length
	 			?	 			
	 			cartItem.map(item => (
	 				<CartItem key = {item.id} item={item} />
	 				))
	 			:
	 			<span className="empty-message">Your cart is empty</span>

	 		}
	 	</div>
	 	<CustomButton onClick ={() => {history.push('/checkout');dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
	 </div>
	)

const mapStateToProps = createStructuredSelector({
	cartItem: selectorCartItem,	
});
// const mapDispatchToProps = (dispatch) => ({
// 	toggleCartHidden: () => (dispatch(toggleCartHidden()))
// }) cant do this , but short, faster than should like this.

export default withRouter(connect(mapStateToProps)(CartDropdown));