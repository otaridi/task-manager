import React from 'react'
import style from './cart.module.css'
import CartModal from "../cart-modal/CartModal";
import Modal from "../modal/Modal";
import {useModal} from "../../hooks/useModal";

const Cart = ()=>{
    const {showModal,toggleModal} = useModal()

    return (
        <div className={style.cartContainer} >
            <section className={style.cart} onClick={toggleModal}>
                <h1>cart</h1>
            </section>
            {showModal ? (
                <Modal>
                    <CartModal toggleModal={toggleModal}/>
                </Modal>
            ) : null}
        </div>
    )
}

export default Cart