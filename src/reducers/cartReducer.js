export default function cartReducer(cart, action){
    switch (action.type) {
        case 'add':
            const {title, description, status, id} = action
            return [...cart, {title, description, status,id}]
        case 'edit': {
            const {title, description, status, id} = action
            // find cart with id
            const itemInCart = cart.find(el => el.id ===id)
            if (itemInCart) {
                // change existing cart
                return cart.map(el => el.id === id ? {...el,title,description,status} : el)
            } else {
                // return new array with the new item appended
                return [...cart, {title,description,status,id}]
            }
        }
        default:
            throw new Error('Unhandled action ' + action.type)
    }
}