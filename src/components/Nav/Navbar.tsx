import React from "react";
import {NavLink} from "react-router-dom";
import {DialogType, StateNavbarType, StoreType } from "../../redux/state";
import s from "./Nav.module.css"

type NavbarType = {
    store: StoreType
}

function Navbar(props: NavbarType) {
    let state = props.store.getState().dialogsPage

    return (
        <nav className={s.nav}>
            {
                props.store.getState().navbarPage.navigation.map(n => <div className={s.item}>
                    <NavLink key={n.id} to={n.to} activeClassName={s.activeLink}>{n.title}</NavLink>
                </div>)
            }
            <div className={s.friends}>
                <span className={s.friendsTitle}>Friends</span>
                <div className={s.friendsBlock}>
                    <div className={s.friendsItem}>
                        <img src={state.dialogs[0].img} alt="q"/>
                        <span className={s.friendsName}>{state.dialogs[0].name}</span>
                    </div>
                    <div className={s.friendsItem}>
                        <img src={state.dialogs[1].img} alt="q"/>
                        <span className={s.friendsName}>{state.dialogs[1].name}</span>
                    </div>
                    <div className={s.friendsItem}>
                        <img src={state.dialogs[2].img} alt="q"/>
                        <span className={s.friendsName}>{state.dialogs[2].name}</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar