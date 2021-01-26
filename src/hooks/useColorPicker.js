import {useState} from "react";

const useColorPicker = (defaultColor) => {
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
    return [color,showColorPicker, colorPickerChange, clickHandler]
}

export default useColorPicker