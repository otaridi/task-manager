import React, {useState, useEffect} from "react";
import {NavLink, useHistory} from "react-router-dom";
import style from './pageNotFound.module.css'

const PageNotFound = () => {
    const history = useHistory()
    const [timer, setTimer] = useState(5)

    useEffect(() => {
        const time = setTimeout(() => {
            setTimer(timer - 1)
        }, 1000);
        if (timer === 0) {
            history.push('/')
        }
        return () => clearTimeout(time)
    }, [timer,history])

    return (
        <div className={style.pageNotFound}>
            <section>
                <h1>Page not found 😕</h1>
                <p>Wait <strong>{timer}</strong> sec or
                    <NavLink to='/'>
                        <strong> go </strong>
                    </NavLink>
                    to home page
                </p>
            </section>
        </div>
    )
}

export default PageNotFound