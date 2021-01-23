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

    const {status, color} = formState
    const addNewColumn = (e) => {
        e.preventDefault()
        const statuses = dashBoard.map(el => el.status)
        if (!statuses.includes(status) && status) {
            dispatchDashBoard({type: addBoard, status, color})
            setShowInput(!showInput)
            setFormState(defaultState)
        } else {
            alert('cant add')
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
    }

    return (
        <div>
            <button className={style.addBoard} onClick={() => setShowInput(!showInput)}>New
                board
            </button>
            <section>
                <form className={style.newBoardForm} onSubmit={addNewColumn}
                      style={showInput ? {display: 'flex'} : {display: 'none'}}>
                    <input type="text" placeholder='status' name='status' onChange={inputChange}
                           value={status}/>
                    <ColorPicker defaultColor={color} name='color'/>
                    <button className={style.addBtn}>Add</button>
                </form>
            </section>
        </div>
    )
}
export default NewBoard