import {createSelector} from 'reselect';


const selectorCart = state => state.cart;


export const selectorCartItem = createSelector(
	[selectorCart],
	(cart) => cart.cartItem
	)
export const selectorCartItemCount = createSelector(
	[selectorCartItem],
	(cartItem) => cartItem.reduce((prev,next)=> (
				prev + next.quantity
		),0)
	)