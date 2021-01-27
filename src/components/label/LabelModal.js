import React, {useState} from "react";
import style from './label.module.css'
import ColorPicker from "../ColorPicker";
import {addLabel} from "../../context/reducers/label-reducer/LabelActions";
import useColorPicker from "../../hooks/useColorPicker";

const LabelModal = ({toggleModal, dispatchLabel}) => {
    const [label, setLabel] = useState('')
    const [color, showColorPicker, colorPickerChange, clickHandler] = useColorPicker('#D4C4FB')

    const addNewLabel = (e) =>{
        e.preventDefault()
        if(label){
            dispatchLabel({type:addLabel, color, label})
            toggleModal()
        }
    }

    const inputChange = (e) =>{
        const {value} = e.target
        setLabel(value)
    }

    return (
        <div className={style.labelModalContainer}>
            <h2>New label</h2>
            <form onSubmit={addNewLabel}>
                <section className={style.colorInput}>
                    <ColorPicker color={color} colorPickerChange={colorPickerChange}
                                 clickHandler={clickHandler} showColorPicker={showColorPicker}/>
                    <input type="text" placeholder='Label name' name='label' onChange={inputChange}/>
                </section>
                <section className={style.modalBtns}>
                    <button onClick={toggleModal}>Cancel</button>
                    <button>Add</button>
                </section>
            </form>
        </div>
    )
}

export default LabelModal