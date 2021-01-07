import React from "react";
import style from './cartModal.module.css'

const CartModal = ({toggleModal})=>{
    return (
        <div className={style.modalContainer}>
            <div className={style.modalCart}>
                <input type="text" placeholder='title'/>
                <h2>editing</h2>
                <textarea placeholder='body'/>
                <button onClick={toggleModal}>cancel</button>
            </div>
        </div>
    )
}

export default CartModal