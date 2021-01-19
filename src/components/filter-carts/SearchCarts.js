// eslint-disable-next-line no-unused-vars
import React, {useEffect, useReducer, useState} from "react";
import {useCart} from "../../context/cartContext";
import style from './searchCarts.module.css'
import {FILTER} from "../../context/cart-reducer/cartActions";


const SearchCarts = () => {
    const {dispatchFilter} = useCart()
    const [checked, setChecked] = useState(false)
    const [searchState, setSearchState] = useState('')

    const [dateFilter, setDateFilter] = useReducer((state, newState) => ({...state, ...newState}),
        {
            startDate: '',
            endDate: ''
        }
    );
    const {startDate, endDate} = dateFilter

    const dateChange = (e) => {
        const {name, value} = e.target
        setDateFilter({
            [name]: value
        })
    }

    const toggleDateFilter = () => {
        setChecked(!checked)
        setDateFilter({startDate: '', endDate: ''})
    }
    const clearInputFields = () => {
        setSearchState('')
        setChecked(false)
        setDateFilter({startDate: '', endDate: ''})
        dispatchFilter({type: FILTER, searchState, startDate, endDate})
    }

    useEffect(() => {
        dispatchFilter({type: 'filter', searchState, startDate, endDate})
    }, [searchState, startDate, endDate])

    return (
        <div className={style.searchContainer}>
            <section className={style.searchField}>
                <input type="search" placeholder='Search by title' value={searchState}
                       onChange={(e) => setSearchState(e.target.value)}/>
            </section>
            <section className={style.dateSearch}>
                <input type="checkbox" onChange={toggleDateFilter} value={!checked}
                       checked={checked}
                       title='filter by date'
                       className={style.check}
                />
                <input type="date"
                       name='startDate'
                       onChange={dateChange}
                       disabled={!checked}
                       value={startDate}
                />
                <input type="date"
                       name='endDate'
                       onChange={dateChange}
                       disabled={!checked}
                       value={endDate}
                />
            </section>
            <button onClick={clearInputFields}>Clear filters</button>
        </div>
    )
}


export default SearchCarts