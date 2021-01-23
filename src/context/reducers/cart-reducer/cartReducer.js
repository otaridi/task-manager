import * as actions from './cartActions'
import {addNewCart,editCart,deleteCart,dropCart,moveCart} from './cartMethods'

export default function cartReducer(cart, action) {
    switch (action.type) {
        case actions.ADD:
            return addNewCart(cart,action)
        case actions.EDIT:
            return editCart(cart,action)
        case actions.DELETE:
            return deleteCart(cart,action)
        case actions.DROP:
            return dropCart(cart,action)
        case actions.MOVE:
            return moveCart(cart,action)
        default:
            return cart
    }
}