import React from 'react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import style from './dashboard.module.css'
import Cart from "../cart/Cart";
import DropWrapper from "../drop-wrapper/DropWrapper";
import {useCart} from "../../context/cartContext";
import * as actions from '../../context/reducers/cart-reducer/cartActions'
import {filterCart} from "../../utilites/cartsFilterHelper";
import NewBoard from "../new-board/NewBoard";
import BoardMenu from "../board-menu/BoardMenu";


const Dashboard = () => {
    const {cart, dispatch, cartFilter, dashBoard, dispatchDashBoard} = useCart()
    const onDrop = (item, monitor, status) => {
        dispatch({
            type: actions.DROP,
            status,
            item
        })
    }
    const moveItem = (dragIndex, hoverIndex, columnStatus, item) => {
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

    const cartStatuses = cart.map(el => el.status)

    return (
        <div>
            {dashBoard.length < 6 ?
                <NewBoard dispatchDashBoard={dispatchDashBoard} dashBoard={dashBoard}/> : null
            }
            <DndProvider backend={HTML5Backend}>
                <div
                    className={dashBoard.length > 3 ? style.dashboardContainer : style.dashBoardGrid}>
                    {
                        dashBoard.map(el => {
                            return <div className={style.board} key={el.status}>
                                <section className={style.dashBoardHeader}>
                                    <h2>{el.status.toUpperCase()}</h2>
                                    <BoardMenu board={el} dispatchDashBoard={dispatchDashBoard}
                                               cartStatuses={cartStatuses} dashBoard={dashBoard}/>
                                </section>
                                <DropWrapper dashBoard={dashBoard} onDrop={onDrop}
                                             status={el.status}
                                             color={el.color}>
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
                        })
                    }
                </div>
            </DndProvider>
        </div>
    )
}

export default Dashboard