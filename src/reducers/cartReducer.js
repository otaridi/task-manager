import * as actions from './cartActions'

export default function cartReducer(cart, action) {
    switch (action.type) {
        case actions.ADD: {
            // add new cart
            const {title, description, status, id} = action
            return [...cart, {title, description, status, id}]
        }
        case actions.EDIT: {
            const {title, description, status, id} = action
            // find cart with id
            const itemInCart = cart.find(el => el.id === id)
            if (itemInCart) {
                // change existing cart
                return cart.map(el => el.id === id ? {...el, title, description, status} : el)
            } else {
                // return new array with the new item appended
                return [...cart, {title, description, status, id}]
            }
        }
        case actions.DELETE: {
            // filter with id
            return cart.filter(el => el.id !== action.id)
        }
        case actions.DROP: {
            const {title, description, status, id} = action
            return cart.map(el => el.id === id ? {...el, title, description, status} : el)
        }
        case actions.MOVE: {
            const {hoverIndex, dragIndex, item} = action
            const movedCarts = cart.filter((el, i) => i !== dragIndex)
            movedCarts.splice(hoverIndex, 0, item)
            return [...movedCarts]
        }
        default:
            // if action type dont match throw this error
            throw new Error('Unhandled action ' + action.type)
    }
}