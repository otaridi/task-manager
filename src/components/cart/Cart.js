import React, {useRef} from 'react'
import style from "./cart.module.css";
import Modal from "../modal/Modal";
import CartModal from "../cart-modal/CartModal";
import {useModal} from "../../hooks/useModal";
import ITEM_TYPE from "../../utilites/dropWrapperTypes";
import {useDrag, useDrop} from 'react-dnd'


// eslint-disable-next-line no-unused-vars
const Cart = ({item, index, moveItem, isOver,status}) => {
    const {showModal, toggleModal} = useModal()
    //=================================
    const ref = useRef(null)
    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoveredRect = ref.current.getBoundingClientRect()
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2
            const mousePosition = monitor.getClientOffset()
            const hoverClientY = mousePosition.y - hoveredRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
                                 // column status which hovered by selected cart
            moveItem(dragIndex, hoverIndex,status)
            item.index = hoverIndex
        },
    })
    // eslint-disable-next-line no-unused-vars
    const [{isDragging}, drag] = useDrag({
        item: {type: ITEM_TYPE, ...item, index},
        collect: monitor => ({
            isDragging: monitor.isDragging
        })
    })
    drag(drop(ref))
    //============================================
    return (
        <div className={isOver ? style.highlight : ''}>
            <div className={style.cartContainer} ref={ref}>
                <section className={isOver ? `${style.cart} ${style.test}` : `${style.cart}`}
                         onClick={toggleModal}>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                </section>
                {
                    showModal ?
                        <Modal><CartModal values={item} toggleModal={toggleModal}/></Modal>
                        : null
                }
            </div>
        </div>
    )
}
export default Cart