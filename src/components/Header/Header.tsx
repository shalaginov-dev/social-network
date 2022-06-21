import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./Header.module.css"

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.headerContainer}>
                <img
                    src="https://git-scm.com/images/logos/logomark-white@2x.png"
                    alt="label"
                />
                <div className={s.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
}


