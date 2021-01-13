import React from 'react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import style from './dashboard.module.css'
import {statuses} from "./dashboardStatus";
import Cart from "../cart/Cart";
import DropWrapper from "../drop-wrapper/DropWrapper";
import {useCart} from "../../context/cartContext";
import * as actions from '../../context/cart-reducer/cartActions'


const Dashboard = () => {
    const {cart, dispatch} = useCart()

    const onDrop = (item, monitor, status) => {
        dispatch({
            type: actions.DROP,
            status,
            id: item.id
        })
    }
    // eslint-disable-next-line no-unused-vars
    const moveItem = (dragIndex, hoverIndex, columnStatus) => {
        const selectedCart = cart.filter(el => el.status === columnStatus)[dragIndex]
        dispatch({
            type: actions.MOVE,
            selectedCart,
            dragIndex,
            hoverIndex,
            columnStatus
        })
    }


    return (
        <DndProvider backend={HTML5Backend}>
            <div className={style.dashboardContainer}>
                {
                    statuses.map(el => {
                        return <div key={el.status}>
                            <h2>{el.status.toUpperCase()}</h2>
                            <div className={`${style.board} ${style[el.status]}`}>
                                <DropWrapper onDrop={onDrop} status={el.status} >
                                    {
                                        cart.filter(i => i.status === el.status)
                                            .map((item, index) => {
                                                return <Cart key={item.id} item={item}
                                                             index={index}
                                                             moveItem={moveItem}
                                                />
                                            })
                                    }
                                </DropWrapper>
                            </div>
                        </div>
                    })
                }
            </div>
        </DndProvider>

    )
}

export default Dashboard