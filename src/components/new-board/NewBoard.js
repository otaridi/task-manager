import React, {useState} from "react";
import style from "./newBoard.module.css";
import ColorPicker from "../ColorPicker";
import {addBoard} from "../../context/reducers/dashboard-reducer/dashBoardActions";

const defaultState = {
    status: '',
    color: '#C1C1E5'
}

const NewBoard = ({dashBoard, dispatchDashBoard}) => {
    const [showInput, setShowInput] = useState(false)
    const [formState, setFormState] = useState(defaultState)
    const [warning, setWarning] = useState(false)

    const {status, color} = formState
    const statuses = dashBoard.map(el => el.status)

    const addNewColumn = (e) => {
        e.preventDefault()
        if (!statuses.includes(status.toLowerCase().trim()) && status.trim()) {
            dispatchDashBoard({type: addBoard, status, color})
            setShowInput(!showInput)
            setFormState(defaultState)
        } else {
            setWarning(true)
        }
    }

    const inputChange = (e) => {
        const {value, name} = e.target
        setFormState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
        statuses.includes(value.toLowerCase().trimStart()) || !value ?
            setWarning(true) : setWarning(false)
    }

    const showNewBoardForm = () => {
        setFormState(defaultState)
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
                    <ColorPicker defaultColor={color} status={status} name='color'
                                 style={{zIndex: '10'}}/>
                    <button className={style.addBtn} disabled={warning}>Add</button>
                </form>
            </section>
        </div>
    )
}
export default NewBoard