import React from 'react'
import style from './header.module.css'
import Modal from "../modal/Modal";
import CartModal from "../cart-modal/CartModal";
import {useModal} from "../../hooks/useModal";
import SearchCarts from "../filter-carts/SearchCarts";

const Header = () => {
    const {showModal,toggleModal} = useModal()
    return (
        <div className={style.headerContainer}>
            <ul>
                <li><h2>Task manager</h2></li>
                <SearchCarts />
                <li>
                    <button className={style.addBtn}
                            onClick={toggleModal}>Add task
                    </button>
                </li>
            </ul>

            {showModal ? (
                <Modal>
                    <CartModal toggleModal={toggleModal} />
                </Modal>
            ) : null}
        </div>
    )
}

export default Header