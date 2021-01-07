import React, {createContext, useReducer, useContext} from 'react'
import cartReducer from "../reducers/cartReducer";

const CartContext = createContext(null)

let initialState = []


export function CartProvider(props) {
    const [cart, dispatch] = useReducer(cartReducer, initialState)

    return <CartContext.Provider value={{cart, dispatch}}>{props.children}</CartContext.Provider>
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error(`useCart must be use within a CartProvider. wrap a parent component with
            <CartProvider> to fix this error`)
    }
    return context
}