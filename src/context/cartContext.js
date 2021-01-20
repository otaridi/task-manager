import React, {createContext, useReducer, useContext, useEffect} from 'react'
import cartReducer from "./cart-reducer/cartReducer";
import filterReducer from "./carts-filter-reducer/filterReducer";

const CartContext = createContext(null)

const initialFilterState = {
    searchState: '',
    startDate: '',
    endDate: ''
}

let initialState;
try {
    initialState = JSON.parse(localStorage.getItem('cart')) ?? []
} catch {
    console.error('The cart could not be parsed into JSON')
    initialState = []
}

export function CartProvider({children}) {
    const [cart, dispatch] = useReducer(cartReducer, initialState)
    const [cartFilter, dispatchFilter] = useReducer(filterReducer, initialFilterState)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const value = {cart, dispatch, cartFilter, dispatchFilter}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error(`useCart must be use within a CartProvider. wrap a parent component with
            <CartProvider> to fix this error`)
    }
    return context
}