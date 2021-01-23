import React from 'react'
import style from './dropWrapper.module.css'
import {useDrop} from 'react-dnd'
import ITEM_TYPE from "../../utilites/dropWrapperTypes";

const DropWrapper = ({onDrop, children, status, color, dashBoard}) => {
    const [{isOver, canDrop}, drop] = useDrop({
        accept: ITEM_TYPE,
        // eslint-disable-next-line no-unused-vars
        canDrop: (item, monitor) => {
            const itemIndex = dashBoard.findIndex(el => el.status === item.status)
            const statusIndex = dashBoard.findIndex(el => el.status === status)
            return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex)
        },
        drop: (item, monitor) => {
            onDrop(item, monitor, status)
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    })

    return (
        <div ref={drop} className={style.dropWrapper} style={{backgroundColor: color}}>
            {React.Children.map(children, (child) => React.cloneElement(child, {
                isOver,
                canDrop,
                status
            }))}
        </div>
    )
}

export default DropWrapper