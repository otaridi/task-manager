const addNewCart = (cart, action) => {
    const {title, description, status, id, date} = action
    return [...cart, {title, description, status, id, date}]
}

const editCart = (cart, action) => {
    const {title, description, status, id,date} = action
    return cart.map(el => el.id === id ? {...el, title, description, status,date} : el)
}

const deleteCart = (cart, action) => {
    return cart.filter(el => el.id !== action.id)
}

const dropCart = (cart, action) => {
    const {status, id} = action
    return cart.map(el => el.id === id ? {...el, status} : el)
}
const moveCart = (cart, action) => {
    const {hoverIndex, dragIndex, selectedCart, columnStatus} = action
    const differentStatusCarts = cart.filter(el => el.status !== selectedCart.status)
    // console.log(selectedCart)
    const currentColumn = cart.filter(el => el.status === columnStatus)
    // console.log('c',currentColumn[dragIndex])
    // console.log('selected',selectedCart)

    const movedCarts = currentColumn.filter((el, i) => i !== dragIndex)
    movedCarts.splice(hoverIndex, 0, selectedCart)
    // console.log(movedCarts)
    return [...differentStatusCarts, ...movedCarts]
}

export {
    addNewCart,
    editCart,
    deleteCart,
    dropCart,
    moveCart
}