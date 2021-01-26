import React, {useState} from "react";
import style from "./newBoard.module.css";
import ColorPicker from "../ColorPicker";
import {addBoard} from "../../context/reducers/dashboard-reducer/dashBoardActions";
import useColorPicker from "../../hooks/useColorPicker";

const NewBoard = ({dashBoard, dispatchDashBoard}) => {
    const [color, showColorPicker, colorPickerChange, clickHandler] = useColorPicker('#D4C4FB')
    const [showInput, setShowInput] = useState(false)
    const [status, setStatus] = useState('')
    const [warning, setWarning] = useState(false)

    const statuses = dashBoard.map(el => el.status)

    const addNewColumn = (e) => {
        e.preventDefault()
        if (!statuses.includes(status.toLowerCase().trim()) && status.trim()) {
            dispatchDashBoard({type: addBoard, status, color})
            setShowInput(!showInput)
            setStatus('')
        } else {
            setWarning(true)
        }
    }

    const inputChange = (e) => {
        const {value} = e.target
        setStatus(value)
        statuses.includes(value.toLowerCase().trimStart()) || !value ?
            setWarning(true) : setWarning(false)
    }

    const showNewBoardForm = () => {
        setStatus('')
        setShowInput(!showInput)
        setWarning(false)
    }

    return (
        <div className={dashBoard.length < 4 ? style.newBoard : style.boardContainer}>
            <button className={style.addBoard} onClick={showNewBoardForm}>New
                board
            </button>
            <section>
                <form className={style.newBoardForm} onSubmit={addNewColumn}
                      style={showInput ? {display: 'flex'} : {display: 'none'}}>
                    <input type="text" placeholder='status' name='status' onChange={inputChange}
                           value={status} autoComplete='off'
                           className={warning ? style.input : ''}/>
                    <ColorPicker color={color} colorPickerChange={colorPickerChange}
                                 clickHandler={clickHandler} showColorPicker={showColorPicker}/>
                    <button className={style.addBtn} disabled={warning}>Add</button>
                </form>
            </section>
        </div>
    )
}
export default NewBoard