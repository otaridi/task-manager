import React from 'react'
import style from './dashboard.module.css'
import Cart from "../cart/Cart";
import {useCart} from "../../context/cartContext";
// import {DndProvider} from "react-dnd";
// import Backend from 'react-dnd-html5-backend'

const Dashboard = () => {
    const {cart} = useCart()
    const backlogCarts = cart.filter(el=>el.status === "backlog")
    const inProgressCarts = cart.filter(el=>el.status === "progress")
    const doneCarts = cart.filter(el=>el.status === "done")

    return (
        // <DndProvider backend={Backend}>
        <div className={style.dashboardContainer}>
            <section>
                <h2>Backlog</h2>
                <div className={`${style.boardBacklog} ${style.board}`}>
                    {backlogCarts.map(el=>{
                            return <Cart key={el.id} value={el} />
                        })}
                </div>
            </section>
            <section>
                <h2>In progress</h2>
                <div className={`${style.boardProgress} ${style.board}`}>
                    {inProgressCarts.map(el=>{
                        return <Cart key={el.id} value={el} />
                    })}
                </div>
            </section>
            <section>
                <h2>Done</h2>
                <div className={`${style.boardDone} ${style.board}`}>
                    {doneCarts.map(el=>{
                        return <Cart key={el.id} value={el} />
                    })}
                </div>
            </section>
        </div>
        // </DndProvider>
    )
}

export default Dashboard