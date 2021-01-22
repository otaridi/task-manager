import React, {useState} from "react";
import style from './label.module.css'
import {GithubPicker} from 'react-color'

const LabelModal = ({toggleModal}) => {
    const [color, setColor] = useState('#BEDADC')
    const [showColorPicker, setShowColorPicker] = useState(false)

    const colorChange = (color)=>{
        setColor(color.hex)
        setShowColorPicker(!showColorPicker)
    }

    return (
        <div className={style.labelModalContainer}>
            <h2>New label</h2>
            <section className={style.colorInput}>
                <button style={{
                    backgroundColor: color,
                }}
                        title='Pick a color'
                        onClick={() => setShowColorPicker(!showColorPicker)}/>
                <input type="text" placeholder='Name'/>
            </section>
            <section className={style.colorPicker}>
                {showColorPicker &&
                <GithubPicker color={color} onChange={colorChange}/>}
            </section>
             <section className={style.modalBtns}>
                 <button onClick={toggleModal}>Cancel</button>
                 <button onClick={()=>alert('????')}>Add</button>
             </section>
        </div>
    )
}

export default LabelModal