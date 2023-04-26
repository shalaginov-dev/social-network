import React, {memo} from "react";
import {NavLink} from "react-router-dom";
import s from "./Nav.module.scss"
import {INavigation} from "../../state/reducers/sidebar-reducer";
import {IDialog} from "../../state/types/dialogs-types";

interface INavbarProps {
    navigation: INavigation[]
    dialogs: IDialog[]
}

export const Navbar = memo(({navigation, dialogs}: INavbarProps) => {

    return (
        <nav className={s.sidebar}>
            <div className={s.nav}>
                {
                    navigation.map(n =>
                        <NavLink to={n.to} key={n.id}>
                                {n.title}
                        </NavLink>
                    )
                }
            </div>
        </nav>
    )
})


