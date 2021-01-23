import {format} from "date-fns";

const addNewCart = (cart, action) => {
    const {title, description, status, id, date} = action
    return [...cart, {title, description, status, id, date}]
}

const editCart = (cart, action) => {
    const {title, description, status, id, date} = action
    return cart.map(el => el.id === id ? {...el, title, description, status, date} : el)
}

const deleteCart = (cart, action) => {
    return cart.filter(el => el.id !== action.id)
}

const dropCart = (cart, action) => {
    const {status, item} = action
    let date;
    // check if cart dropped in same column dont change date
    if (status === item.status) {
        date = format(new Date(item.date), 'MM/dd/yyyy')
    } else {
        date = format(new Date(), 'MM/dd/yyyy')
    }
    return cart.map(el => el.id === item.id ? {...el, status, date} : el)
}
const moveCart = (cart, action) => {
    let {hoverIndex, dragIndex, columnStatus,item} = action
    // if cart moved another column change drag index
    if(item.status !== columnStatus){
        dragIndex = 0
    }
    const selectedCart = cart.filter(el => el.status === columnStatus)[dragIndex]

    const differentStatusCarts = cart.filter(el => el.status !== selectedCart.status)
    const currentColumn = cart.filter(el => el.status === columnStatus)
    const movedCarts = currentColumn.filter((el, i) => i !== dragIndex)
    movedCarts.splice(hoverIndex, 0, selectedCart)
    return [...differentStatusCarts, ...movedCarts]
}

export {
    addNewCart,
    editCart,
    deleteCart,
    dropCart,
    moveCart
}