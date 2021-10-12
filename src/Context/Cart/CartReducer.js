import { ADD_TO_CART } from "../Types";

const CartReducer = (state, action) => {
    switch(action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                cartItem: [...state.cartItem, action.payload]
            }
        }
        default:
            return state
    }
}
export default CartReducer