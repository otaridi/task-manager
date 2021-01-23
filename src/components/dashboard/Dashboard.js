import React from 'react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import style from './dashboard.module.css'
import {statuses} from "../../utilites/dashboardStatuses";
import Cart from "../cart/Cart";
import DropWrapper from "../drop-wrapper/DropWrapper";
import {useCart} from "../../context/cartContext";
import * as actions from '../../context/cart-reducer/cartActions'
import {filterCart} from "../../utilites/cartsFilterHelper";


const Dashboard = () => {
    const {cart, dispatch, cartFilter} = useCart()
    const onDrop = (item, monitor, status) => {
        dispatch({
            type: actions.DROP,
            status,
            item
        })
    }
    const moveItem = (dragIndex, hoverIndex, columnStatus,item) => {
        dispatch({
            type: actions.MOVE,
            item,
            dragIndex,
            hoverIndex,
            columnStatus,
        })
    }

    const {searchState, startDate, endDate} = cartFilter
    const carts = filterCart(cart, searchState, startDate, endDate)

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={style.dashboardContainer}>
                {
                    statuses.map(el => {
                        return <div key={el.status}>
                            <div className={style.board}>
                                <h2>{el.status.toUpperCase()}</h2>
                                <DropWrapper onDrop={onDrop} status={el.status} color={el.color}>
                                    {
                                        carts.filter(i => i.status === el.status)
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