import React from "react";
import {GithubPicker} from "react-color";

const ColorPicker = ({color, clickHandler, colorPickerChange,showColorPicker}) => {
    return (
        <div style={{position: 'relative'}}>
            <button style={{
                backgroundColor: color,
            }}
                    title='Pick a color'
                    onClick={clickHandler}/>
            {showColorPicker &&
            <div style={{position: 'absolute', right: '-106px'}}>
                <GithubPicker color={color} onChange={colorPickerChange} triangle={'hide'}/>
            </div>}
        </div>
    )
}
export default ColorPicker