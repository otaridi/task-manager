import React, {useState} from "react";
import style from './cartModal.module.css'
import {useCart} from "../../context/cartContext";

const emptyForm = {
    title: '',
    description: '',
    status: 'backlog'
}

const CartModal = ({toggleModal, values}) => {
    const [body, setBody] = useState(values ? values : emptyForm)
    const {cart, dispatch} = useCart()

    function handleChange(e) {
        e.persist()
        setBody(currValue => {
            return {
                ...currValue,
                [e.target.id]: e.target.value
            }
        })
    }

    function formSubmit(e) {
        const {title, description, status} = body
        if (title.length === 0 || description.length === 0) {
            e.preventDefault()
        }
        // add new task
        if (title && description && !values) {
            dispatch({type: 'add', title, description, status, id: cart.length + 1})
            toggleModal()
        }
        // edit task
        if (values && title.length > 0 && description.length > 0) {
            dispatch({type: 'edit', title, description, status, id: values.id})
            toggleModal()
        }
    }

    return (
        <div className={style.modalContainer}>
            <div className={style.modalCart}>
                <form onSubmit={formSubmit}>
                    <section className={style.header}>
                        <input type="text" value={body.title}
                               placeholder='title' id='title' onChange={handleChange}
                               autoComplete='off'/>
                        <h3>{values ? 'Edit task' : 'New task'}</h3>
                    </section>
                    <section className={style.body}>
                        <textarea placeholder='body' id='description' onChange={handleChange}
                                  value={body.description}/>
                    </section>
                    <section className={style.footer}>
                        <select id='status' value={body.status} onChange={handleChange}>
                            <option value="backlog">Backlog</option>
                            <option value="progress">In progress</option>
                            <option value="done">Done</option>
                        </select>
                        <section className={style.buttons}>
                            <button onClick={toggleModal}>cancel</button>
                            <button>{values ? 'Edit' : 'Add'}</button>
                        </section>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default CartModal