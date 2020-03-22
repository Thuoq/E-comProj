import CartActionTypes from './cart.types'
import {addItemToCart,decraseCartItem} from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItem: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            }
        case CartActionTypes.addItem:
            return {
                ...state,
                cartItem: addItemToCart(state.cartItem,action.payload)
            }
        case CartActionTypes.clearItem:
            return {
                ...state,
                cartItem: state.cartItem.filter(el => el.id !== action.payload.id)
            }
        case CartActionTypes.DECARSE_ITEM_FROM_CART: 
            return {  
                ...state,
                cartItem: decraseCartItem(state.cartItem,action.payload)
            }
        
        default:
            return state;
    }
}
export default cartReducer;