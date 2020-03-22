

// Add Item to Card


export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		item => item.id === cartItemToAdd.id)
	// true or underfine
	if(existingCartItem) {
		return cartItems.map(item =>
			item.id ===cartItemToAdd.id
			? {...item,quantity:item.quantity +1}
			: item
		)
	}
	return [...cartItems, {...cartItemToAdd,quantity: 1}]
}
export const decraseCartItem = (cartItems,cartItemToAdd) => {
	const exitsItem =  cartItems.find(el => el.id === cartItemToAdd.id);
	if(exitsItem.quantity === 1 ) {
		return cartItems.filter(el => el.id !== cartItemToAdd.id )
	}	
	return cartItems.map(el => (el.id === cartItemToAdd.id) ? {...el,quantity: el.quantity - 1 } :el )
}