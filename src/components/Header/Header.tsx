import React, {memo, useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from "./Header.module.scss"
import {LogOut} from "../../state/actions/auth-actions"
import {useAppDispatch, useAppSelector} from "../../state/hooks";

interface HeaderProps {
    isAuth: boolean
    photo?: string
}

export const Header = memo(({isAuth, photo}: HeaderProps) => {
    const dispatch = useAppDispatch()
    const [popupView, setPopupView] = useState(false)
    const handleLogoutClick = () => {
        setPopupView(false)
        dispatch(LogOut())
    }
    return (
        <header className={s.header}>
            {
                isAuth &&
                <div onClick={() => {setPopupView(!popupView)}} className={s.loginBlock } style={ popupView? { backgroundColor: 'rgba(255, 255, 255, 0.1)'} : {} } >
                    <img src={photo} alt="ava"/>
                    <svg fill="#FFFFFF99" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"
                         width="24" height="24">
                        <path
                            d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"/>
                    </svg>
                </div>
            }
            {
                popupView &&
                <div className={s.popupBlock}>
                    <button onClick={handleLogoutClick}>Logout</button>
                </div>
            }
        </header>
    )
})


