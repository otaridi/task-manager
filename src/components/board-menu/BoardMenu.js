import React, {useEffect, useState} from "react";
import style from './boardMenu.module.css'
import ColorPicker from "../ColorPicker";
import {
    deleteBoard,
    edit,
    changeColor
} from "../../context/reducers/dashboard-reducer/dashBoardActions";
import useColorPicker from "../../hooks/useColorPicker";

const BoardMenu = ({board, dispatchDashBoard, cartStatuses, dashBoard}) => {
    const [color, showColorPicker, colorPickerChange, clickHandler] = useColorPicker(board.color)
    const [showMenu, setShowMenu] = useState(false)
    const [title, setTitle] = useState('')
    const [warning, setWarning] = useState(false)

    const statuses = dashBoard.map(el => el.status)

    const titleChange = (e) => {
        const {value} = e.target
        setTitle(e.target.value)
        statuses.includes(value.toLowerCase().trimStart()) || !value ?
            setWarning(true) : setWarning(false)
    }

    const editBoardTitle = (e) => {
        e.preventDefault()
        if (!statuses.includes(title.toLowerCase().trim()) && title.trim()) {
            dispatchDashBoard({
                type: edit,
                status: board.status,
                title
            })
        } else {
            setWarning(true)
        }
    }

    useEffect(() => {
        dispatchDashBoard({type: changeColor, color, status: board.status})
    }, [color])

    return (
        <div style={style.menuContainer}>
            <div className={showMenu ? `${style.hamburger} ${style.animate}` : style.hamburger}
                 onClick={() => {
                     setWarning(false)
                     setShowMenu(!showMenu)
                 }}>
                <span/>
                <span/>
                <span/>
            </div>
            <ul className={style.menu} style={showMenu ? {display: 'block',} : {display: 'none'}}>
                <li>
                    <ColorPicker color={color} colorPickerChange={colorPickerChange}
                                 clickHandler={clickHandler}
                                 showColorPicker={showColorPicker}/>
                    <span>Board color</span>
                </li>
                {cartStatuses.includes(board.status) ? null :
                    <li>
                        <form onSubmit={editBoardTitle}>
                            <input type="text" placeholder='edit title' value={title}
                                   onChange={titleChange}
                                   className={warning ? style.input : ''}/>
                            <button disabled={warning}>edit</button>
                        </form>
                    </li>
                }

                {cartStatuses.includes(board.status) || dashBoard.length < 3 ? null :
                    <li onClick={() => dispatchDashBoard({
                        type: deleteBoard,
                        status: board.status,
                    })} className={style.deleteBtn}>Delete
                    </li>
                }
            </ul>
        </div>
    )
}

export default BoardMenu