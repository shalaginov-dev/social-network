import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Nav.module.css"
import {INavigation} from "../../state/reducers/sidebar-reducer";
import {IDialog} from "../../state/types/dialogs-types";

interface INavbarProps {
    navigation: INavigation[]
    dialogs: IDialog[]
}

export const Navbar = ({navigation, dialogs}: INavbarProps) => {

    return (
        <nav className={s.sidebar}>
            <div className={s.nav}>
                {
                    navigation.map(n => <div className={s.item} key={n.id}>
                        <NavLink to={n.to}>{n.title}</NavLink>
                    </div>)
                }
            </div>
            <div className={s.friends}>
                <span className={s.friendsTitle}>Friends</span>
                <div className={s.friendsBlock}>
                    {
                        dialogs.map(d => <div className={s.friendsItem} key={d.id}>
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


