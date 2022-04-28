import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./Header.module.css"
import {HeaderContainerPropsType} from "./HeaderContainer";

function Header(props: HeaderContainerPropsType) {
    return <header className={s.header}>
        <div className={s.headerContainer}>
            <img
                src="https://git-scm.com/images/logos/logomark-white@2x.png"
                alt=""/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    </header>
}

export default Header