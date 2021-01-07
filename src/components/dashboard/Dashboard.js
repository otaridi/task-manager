import React from 'react'
import style from './dashboard.module.css'
import Cart from "../cart/Cart";
// import {DndProvider} from "react-dnd";
// import Backend from 'react-dnd-html5-backend'

const Dashboard = () => {
    return (
        // <DndProvider backend={Backend}>
        <div className={style.dashboardContainer}>
            <section>
                <h2>backlog</h2>
                <div className={style.board}><Cart/></div>
            </section>
            <section>
                <h2>in progress</h2>
                <div className={style.board}></div>
            </section>
            <section>
                <h2>done</h2>
                <div className={style.board}></div>
            </section>
        </div>
        // </DndProvider>
    )
}

export default Dashboard