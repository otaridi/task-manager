import React, {useState} from "react";
import style from './cartModal.module.css'
import {useCart} from "../../context/cartContext";
import * as actions from '../../reducers/cartActions'

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
        // add new task
        if (title && description && !values) {
            dispatch({type: actions.ADD, title, description, status, id: cart.length + 1})
            toggleModal()
        }
        // edit task
        if (values && title.length > 0 && description.length > 0) {
            dispatch({type: actions.EDIT, title, description, status, id: values.id})
            toggleModal()
        }
    }

    const blurHandle = ()=>{
    //    TODO
    }
    return (
        <div className={style.modalContainer}>
            <div className={style.modalCart}>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                <form onSubmit={formSubmit} onKeyPress={handleKeyPress}>
                    <section className={style.header}>
                        <input type="text" value={formFields.title}
                               placeholder='Title' id='title' onChange={handleChange}
                               onBlur={blurHandle}
                               autoComplete='off'
                               className={warning && formFields.title.length === 0? style.warning:''}
                        />
                        <h3>{values ? 'Edit task' : 'New task'}</h3>
                    </section>
                    <section className={style.body}>
                        <textarea placeholder='Description' id='description' onChange={handleChange}
                                  onBlur={blurHandle}
                                  value={formFields.description}
                               className={warning && formFields.description.length === 0?  style.warning:''}
                        />
                    </section>
                    <section className={style.footer}>
                        <select id='status' value={formFields.status} onBlur={blurHandle} onChange={handleChange}>
                            <option value="backlog">Backlog</option>
                            <option value="progress">In progress</option>
                            <option value="done">Done</option>
                        </select>
                        <section className={style.buttons}>
                            <button onClick={toggleModal}>cancel</button>
                            {values && <button onClick={() => dispatch({
                                type: actions.DELETE,
                                id: values.id
                            })}>remove</button>}
                            <button>{values ? 'Edit' : 'Add'}</button>
                        </section>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default CartModal