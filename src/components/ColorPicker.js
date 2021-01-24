import React, {useEffect, useState} from "react";
import {GithubPicker} from "react-color";
import {changeColor} from "../context/reducers/dashboard-reducer/dashBoardActions";

const ColorPicker = ({defaultColor, status, dispatchDashBoard}) => {
    const [color, setColor] = useState(defaultColor)
    const [showColorPicker, setShowColorPicker] = useState(false)

    const colorPickerChange = (colorPicker) => {
        setColor(colorPicker.hex)
        setShowColorPicker(!showColorPicker)
    }
    const clickHandler = (e) => {
        e.preventDefault()
        setShowColorPicker(!showColorPicker)
    }
    useEffect(() => {
        if (typeof dispatchDashBoard === 'function') {
            dispatchDashBoard({type: changeColor, color, status})
        }
    }, [color])
    return (
        <div style={{position:'relative'}}>
            <button style={{
                backgroundColor: color,
            }}
                    title='Pick a color'
                    onClick={clickHandler}/>
            {showColorPicker &&
            <div style={{position: 'absolute',right:'-20px'}}>
                <GithubPicker color={color} onChange={colorPickerChange} triangle={'hide'}/>
            </div>}
        </div>
    )
}
export default ColorPicker