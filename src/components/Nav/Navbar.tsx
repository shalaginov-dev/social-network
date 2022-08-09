import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Nav.module.css"
import {NavigationType} from "../../state/reducers/sidebar-reducer";
import {DialogType} from "../../state/types/dialogs-types";

type NavbarPropsType = {
    navigation: NavigationType[]
    dialogs: DialogType[]
}

export const Navbar = (props: NavbarPropsType) => {

    return (
        <nav className={s.sidebar}>
            <div className={s.nav}>
                {
                    props.navigation.map(n => <div className={s.item} key={n.id}>
                        <NavLink to={n.to}>{n.title}</NavLink>
                    </div>)
                }
            </div>
            <div className={s.friends}>
                <span className={s.friendsTitle}>Friends</span>
                <div className={s.friendsBlock}>
                    {
                        props.dialogs.map(d => <div className={s.friendsItem} key={d.id}>
                                <img src={d.img} alt="q"/>
                                <span className={s.friendsName}>{d.name}</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}


