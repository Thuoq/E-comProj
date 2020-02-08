import {createSelector} from 'reselect';


const selectorCart = state => state.cart;


export const selectorCartItem = createSelector(
	[selectorCart],
	(cart) => cart.cartItem
	)
export const selectorCartHidden = createSelector([selectorCart],
	(cart) => cart.hidden
	)
export const selectorCartItemCount = createSelector(
	[selectorCartItem],
	(cartItem) => cartItem.reduce((prev,next)=> (
				prev + next.quantity
		),0)
	)
export const selectorCartTotal = createSelector(
	[selectorCartItem],
	(cartItem) => cartItem.reduce((prev,next)=> (
				(prev + next.quantity) * next.price
		),0)
	)