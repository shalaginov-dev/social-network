import React from 'react'
import {NavLink} from 'react-router-dom'
import s from "./Header.module.css"
import {LogOut} from "../../state/actions/auth-actions"
import {useAppDispatch} from "../../state/hooks";

interface IHeaderProps {
    isAuth: boolean
    login: string | null
}

export const Header = ({isAuth, login}: IHeaderProps) => {
    const dispatch = useAppDispatch()

    return (
        <header className={s.header}>
            <div className={s.headerContainer}>
                <div className={s.loginBlock}>
                    {
                        isAuth
                            ? <div>
                                <span>{login + ' '}</span>
                                <button onClick={() => {
                                    dispatch(LogOut())
                                }}>
                                    log out
                                </button>
                            </div>
                            : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </div>
        </header>
    )
}


