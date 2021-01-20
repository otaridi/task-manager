import React from "react";
import {NavLink} from "react-router-dom";
import {useModal} from "../../hooks/useModal";
import style from "./label.module.css"
import Modal from "../modal/Modal";
import LabelModal from "./LabelModal";

const Label = () =>{
    const {showModal, toggleModal} = useModal()
    return (
        <div className={style.headerContainer}>
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
                    <LabelModal toggleModal={toggleModal}/>
                </Modal>
            ) : null}
        </div>
    )
}

export default Label