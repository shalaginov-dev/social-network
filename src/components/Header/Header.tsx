import React from 'react';
import s from "./Header.module.css"

function Header() {
    return <header className={s.header}>
        <img
            src="https://git-scm.com/images/logos/logomark-white@2x.png"
            alt=""/>
    </header>
}

export default Header