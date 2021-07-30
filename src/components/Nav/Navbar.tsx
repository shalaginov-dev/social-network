import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {InitialDialogsType} from "../../redux/dialogs-reducer";
import {StateType} from "../../redux/redux-store";
import {InitialSidebarType} from "../../redux/sidebar-reducer";
import s from "./Nav.module.css"

type PropsType = {
    sidebar: InitialSidebarType
    dialogsPage: InitialDialogsType
}

function Navbar(props: PropsType) {

    return (
        <nav className={s.sidebar}>
            <div className={s.nav}>
                {
                    props.sidebar.navigation.map(n => <div className={s.item} key={n.id}>
                        <NavLink to={n.to} activeClassName={s.activeLink}>{n.title}</NavLink>
                    </div>)
                }
            </div>
            <div className={s.friends}>
                <span className={s.friendsTitle}>Friends</span>
                <div className={s.friendsBlock}>
                    {
                        props.dialogsPage.dialogs.map(d => <div className={s.friendsItem} key={d.id}>
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

const mapStateToProps = (state: StateType) => {
    return {
        sidebar: state.sidebar,
        dialogsPage: state.dialogsPage
    }
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)