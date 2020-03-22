import React from 'react';
import {connect} from 'react-redux';
import {removeItemFromCart,addItem,decreaseQuantity} from '../../redux/cart/cart.action';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem,removeItemFromCart,addItem,decreaseQuantity}) => {
	const {imageUrl,name,quantity,price} = cartItem;

	return (
	<div className = 'checkout-item'>
		 <div className ='image-container'>
		 	<img src ={imageUrl} alt='item' />
		 </div>
		 <span className= "name">{name}</span>
		 <span className= "quantity">
		 	<div className= "arrow" onClick={() => decreaseQuantity(cartItem)} >&#10094;</div>
				{quantity}
			<div className="arrow" onClick={() => addItem(cartItem) }>&#10095;</div>
		 </span>
		 <span className= "price">{price}</span>
		 <span className= "remove-button" onClick = {() => removeItemFromCart(cartItem)}>&#10005;</span>
	</div>
)}
const mapDispatchToProps  = dispatch => ({
	removeItemFromCart : item => dispatch(removeItemFromCart(item)),
	addItem : item => dispatch(addItem(item)),
	decreaseQuantity : item => dispatch(decreaseQuantity(item))	
})

export default connect(null,mapDispatchToProps)(CheckoutItem); 