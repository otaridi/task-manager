import React from 'react'
import {useDrop} from 'react-dnd'
import ITEM_TYPE from "./types";
import {statuses} from "../dashboard/dashboardStatus";

const DropWrapper = ({onDrop, children, status})=>{
    const [{isOver,canDrop}, drop] = useDrop({
        accept:ITEM_TYPE,
        // eslint-disable-next-line no-unused-vars
        canDrop: (item,monitor)=>{
            const itemIndex = statuses.findIndex(el=>el.status === item.status)
            const statusIndex = statuses.findIndex(el=>el.status === status)
            return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex)
        },
        drop: (item, monitor)=>{
            onDrop(item,monitor,status)
        },
        collect: monitor => ({
            isOver:monitor.isOver(),
            canDrop:monitor.canDrop()
        })
    })

    return (
        <div ref={drop} className='drop-wrapper'>
            { React.Children.map(children, (child) => React.cloneElement(child, {isOver,canDrop,status}))}
        </div>
    )
}

export default DropWrapper