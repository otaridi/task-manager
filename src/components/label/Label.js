import React from "react";
import {NavLink} from "react-router-dom";
import {useModal} from "../../hooks/useModal";
import style from "./label.module.css"
import Modal from "../modal/Modal";
import LabelModal from "./LabelModal";
import {useCart} from "../../context/cartContext";

const Label = () => {
    const [showModal, toggleModal] = useModal()
    // eslint-disable-next-line no-unused-vars
    const {label, dispatchLabel} = useCart()

    return (
        <div>
            <section className={style.labelHeader}>
                <ul>
                    <li>
                        <button onClick={toggleModal}>Add label</button>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <button>Home</button>
                        </NavLink>
                    </li>
                </ul>
                {showModal ? (
                    <Modal>
                        <LabelModal toggleModal={toggleModal} dispatchLabel={dispatchLabel}/>
                    </Modal>
                ) : null}
            </section>
        </div>
    )
}

export default Label