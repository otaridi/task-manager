import React from "react";
import style from './label.module.css'
import ColorPicker from "../ColorPicker";

const LabelModal = ({toggleModal, defaultColor}) => {
    return (
        <div className={style.labelModalContainer}>
            <h2>New label</h2>
            <section className={style.colorInput}>
                <ColorPicker defaultColor={defaultColor}/>
                <input type="text" placeholder='Name'/>
            </section>
            <section className={style.modalBtns}>
                <button onClick={toggleModal}>Cancel</button>
                <button onClick={() => alert('????')}>Add</button>
            </section>
        </div>
    )
}

export default LabelModal