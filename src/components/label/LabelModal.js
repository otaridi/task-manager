import React, {useState} from "react";
import style from './label.module.css'
import ColorPicker from "../ColorPicker";
import {addLabel} from "../../context/reducers/label-reducer/LabelActions";

const defaultFormState = {
    color: '#BEDADC',
    label:''
}

const LabelModal = ({toggleModal, dispatchLabel}) => {
    const [formState, setFormState] = useState(defaultFormState)
    const {color, label} = formState
    const addNewLabel = (e) =>{
        e.preventDefault()
        if(label){
            dispatchLabel({type:addLabel, color, label})
            toggleModal()
        }
    }

    const inputChange = (e) =>{
        const {value,name} = e.target
        setFormState(prevState => {
            return {
                ...prevState,
                [name]:value
            }
        })
    }

    return (
        <div className={style.labelModalContainer}>
            <h2>New label</h2>
            <form onSubmit={addNewLabel}>
                <section className={style.colorInput}>
                    <ColorPicker defaultColor={formState.color} name='color'/>
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