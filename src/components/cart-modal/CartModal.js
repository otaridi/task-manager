import React, {useState} from "react";
import style from './cartModal.module.css'
import {useCart} from "../../context/cartContext";
import * as actions from '../../context/cart-reducer/cartActions'
import {statuses} from "../../utilites/dashboardStatuses";
import {format} from 'date-fns'


const emptyForm = {
    title: '',
    description: '',
    status: 'backlog'
}

const CartModal = ({toggleModal, values}) => {

    const [formFields, setFormFields] = useState(values ? values : emptyForm)
    const {cart, dispatch} = useCart()
    const [warning, setWarning] = useState(false)

    function handleChange(e) {
        e.persist()
        setFormFields(currValue => {
            return {
                ...currValue,
                [e.target.id]: e.target.value
            }
        })
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
        }
    }

    function formSubmit(e) {
        const {title, description, status} = formFields
        if (title.length === 0 || description.length === 0) {
            setWarning(true)
            e.preventDefault()
        }
        // Add new task
        if (title && description && !values) {
            const date = format(new Date(),'MM/dd/yyyy')
            // finds max id from cart
            const ids = cart.map(el => el.id)
            const id = ids.length === 0 ? 1 : Math.max(...ids) + 1
            dispatch({type: actions.ADD, title, description, status, id, date})
            toggleModal()
        }
        // Edit task
        if (values && title.length > 0 && description.length > 0) {
            const date = format(new Date(),'MM/dd/yyyy')
            dispatch({type: actions.EDIT, title, description, status, id: values.id,date})
            toggleModal()
        }
    }

    const blurHandle = () => {
        //    TODO
    }
    return (
        <div className={style.modalContainer}>
            <div className={style.modalCart}>
                <form onSubmit={formSubmit}>

                    <section className={style.header}>
                        <input type="text" value={formFields.title}
                               onKeyPress={handleKeyPress}
                               placeholder='Title' id='title' onChange={handleChange}
                               onBlur={blurHandle}
                               autoComplete='off'
                               className={warning && formFields.title.length === 0 ? style.warning : ''}
                        />
                        <h3>{values ? 'Edit task' : 'New task'}</h3>
                    </section>

                    <section className={style.body}>
                        <textarea placeholder='Description' id='description' onChange={handleChange}
                                  onBlur={blurHandle}
                                  value={formFields.description}
                                  className={warning && formFields.description.length === 0 ? style.warning : ''}
                        />
                    </section>
                     <section className={style.createDate}>
                         {values? <h5>Created: {values.date}</h5>:null}
                     </section>
                    <section className={style.cartFooter}>

                        <select id='status' className={style.select} value={formFields.status}
                                onBlur={blurHandle} onChange={handleChange}>
                            {statuses.map(el =>
                                <option key={el.status} value={el.status}>{el.status}</option>
                            )}
                        </select>

                        <section className={style.buttons}>
                            <button className={style.cancelBtn} onClick={toggleModal}>Cancel
                            </button>
                            {values && <button className={style.removeBtn} onClick={() => dispatch({
                                type: actions.DELETE,
                                id: values.id
                            })}>Delete</button>}
                            <button className={style.addBtn}>{values ? 'Edit' : 'Add'}</button>
                        </section>

                    </section>
                </form>
            </div>
        </div>
    )
}

export default CartModal