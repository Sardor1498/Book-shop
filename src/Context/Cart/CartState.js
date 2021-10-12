import { useReducer } from "react";
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { ADD_TO_CART } from "../Types";

const CartState = ({ children }) => {
    const initialState = {
        showCart: false,
        cartItem: [],
    };

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = item => {
        dispatch({ type: ADD_TO_CART, payload: item })
    }

    return (
        <CartContext.Provider value={{ showCart: state.showCart, cartItem: state.cartItem, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState
