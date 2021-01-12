import React from 'react'
import style from './dashboard.module.css'
import {statuses} from "./dashboardStatus";
import Cart from "../cart/Cart";
import DropWrapper from "../drop-wrapper/DropWrapper";
import {useCart} from "../../context/cartContext";
import * as actions from '../../reducers/cartActions'


const Dashboard = () => {
    const {cart, dispatch} = useCart()

    const onDrop = (item, monitor, status) => {
        dispatch({
            type: actions.DROP,
            title: item.title,
            description: item.description,
            status,
            id: item.id
        })
    }

    const moveItem = (dragIndex, hoverIndex) => {
        const item = cart[dragIndex]
        dispatch({
            type: actions.MOVE,
            item,
            dragIndex,
            hoverIndex
        })
    }

    return (
        <div className={style.dashboardContainer}>
            {
                statuses.map(el => {
                    return <div key={el.status}>
                        <h2>{el.status.toUpperCase()}</h2>
                        <div className={`${style.board} ${style[el.status]}`}>
                            <DropWrapper onDrop={onDrop} status={el.status}>
                                    {
                                        cart.filter(i => i.status === el.status)
                                            .map((element, i) => {
                                                return <Cart key={element.id} item={element}
                                                             index={i}
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
    )
}

export default Dashboard