import React, {useEffect, useState} from "react";
import {useCart} from "../../context/cartContext";
import style from './searchCarts.module.css'
import 'react-datepicker/dist/react-datepicker.css'
import {FILTER} from "../../context/cart-reducer/cartActions";

const emptyDateFields = {
    startDate: '',
    endDate: ''
}

const SearchCarts = () => {
    const {dispatchFilter} = useCart()
    const [checked, setChecked] = useState(false)
    const [searchState, setSearchState] = useState('')
    const [dateFilter, setDateFilter] = useState(emptyDateFields)
    const {startDate, endDate} = dateFilter

    const dateChange = (e) => {
        const {name, value} = e.target
        setDateFilter(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const toggleDateFilter = () => {
        setChecked(!checked)
        setDateFilter(emptyDateFields)
    }
    const clearInputFields = () => {
        setSearchState('')
        setChecked(false)
        setDateFilter(emptyDateFields)
        dispatchFilter({type: FILTER, searchState, startDate, endDate})
    }

    useEffect(() => {
        dispatchFilter({type: 'filter', searchState, startDate, endDate})
    }, [searchState, startDate, endDate])

    return (
        <div className={style.searchContainer}>
            <section className={style.searchField}>
                <input type="search" placeholder='Search by title' value={searchState}
                       onChange={(e) => setSearchState(e.target.value)}
                       title='Filter by title'
                />
            </section>
            <section className={style.dateSearch} style={{display: checked ? 'flex' : 'none'}}>
                <label className={style.from}>From</label>
                <input type="date"
                       name='startDate'
                       onChange={dateChange}
                       value={startDate}
                />
                <label>To</label>
                <input type="date"
                       name='endDate'
                       onChange={dateChange}
                       value={endDate}
                />
            </section>
            <button onClick={toggleDateFilter} className={style.dateDropDown}
                    title='Filter by date'>Date<span
                className={!checked ? `${style.arrow} ${style.active}` : style.arrow}>
                          <span/><span/></span>
            </button>
            <button onClick={clearInputFields} title='Clear filter'>Reset</button>
        </div>
    )
}


export default SearchCarts