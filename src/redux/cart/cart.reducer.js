import CartActionTypes from './cart.types'

const INITIAL_STAT = {
	hidden: true,
}

const cartReducer = (state = INITIAL_STAT, action) => {
	switch(action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			}
		default:
		return state;
	}
}
export default cartReducer;