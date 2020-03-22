import CartActionTypes from './cart.types';


export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
})
export const addItem = item => ({
	type: CartActionTypes.addItem,
	payload: item,
})

export const removeItemFromCart = item => ({
	type: CartActionTypes.clearItem,
	payload: item
})
export const decreaseQuantity = item => ({
	type: CartActionTypes.DECARSE_ITEM_FROM_CART,
	payload: item
})