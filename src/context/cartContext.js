import React, {createContext, useReducer, useContext, useEffect} from 'react'
import cartReducer from "./reducers/cart-reducer/cartReducer";
import filterReducer from "./reducers/carts-filter-reducer/filterReducer";
import dashBoardReducer from './reducers/dashboard-reducer/dashBoardReducer'
import {filterState, dashboardState, cartsState} from "./reducers/initialStates";

const CartContext = createContext(null)

export function CartProvider({children}) {
    const [cart, dispatch] = useReducer(cartReducer, cartsState)
    const [cartFilter, dispatchFilter] = useReducer(filterReducer, filterState)
    const [dashBoard, dispatchDashBoard] = useReducer(dashBoardReducer, dashboardState)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const value = {cart, dispatch, cartFilter, dispatchFilter, dashBoard, dispatchDashBoard}
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