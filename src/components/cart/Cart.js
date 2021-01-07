import React from 'react'
import style from "./cart.module.css";
import Modal from "../modal/Modal";
import CartModal from "../cart-modal/CartModal";
import {useModal} from "../../hooks/useModal";

const Cart = ({value})=>{
    const {showModal,toggleModal} = useModal()
    return (
        <div className={style.cartContainer}>
            <section className={style.cart} onClick={toggleModal}>
                <h3>{value.title}</h3>
                <h3>{value.description}</h3>
            </section>
            {
                showModal ?
                    <Modal><CartModal values={value} toggleModal={toggleModal}/></Modal>
                    :null
            }
        </div>

    )
}
export default Cart