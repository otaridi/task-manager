const addNewCart = (cart,action)=>{
    const {title, description, status, id} = action
    return [...cart, {title, description, status, id}]
}

const editCart = (cart,action)=>{
    const {title, description, status, id} = action
    return cart.map(el => el.id === id ? {...el, title, description, status} : el)
}

const deleteCart = (cart,action)=>{
    return cart.filter(el => el.id !== action.id)
}

const dropCart = (cart,action)=>{
    const {status, id} = action
    return cart.map(el => el.id === id ? {...el, status} : el)
}
const moveCart = (cart,action)=>{
    const {hoverIndex, dragIndex, selectedCart,columnStatus} = action
    const differentStatusCarts = cart.filter(el => el.status !== selectedCart.status)
    const currentColumn = cart.filter(el=>el.status === columnStatus)
    const movedCarts = currentColumn.filter((el, i) => i !== dragIndex)
    movedCarts.splice(hoverIndex, 0, selectedCart)
    return [...differentStatusCarts,...movedCarts]
}

export  {
    addNewCart,
    editCart,
    deleteCart,
    dropCart,
    moveCart
}