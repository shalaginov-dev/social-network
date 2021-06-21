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
        <nav className={s.nav}>
            {
                props.sidebar.navigation.map(n => <div className={s.item} key={n.id}>
                    <NavLink key={n.id} to={n.to} activeClassName={s.activeLink}>{n.title}</NavLink>
                </div>)
            }
            <div className={s.friends}>
                <span className={s.friendsTitle}>Friends</span>
                <div className={s.friendsBlock}>
                    <div className={s.friendsItem}>
                        <img src={props.dialogsPage.dialogs[0].img} alt="q"/>
                        <span className={s.friendsName}>{props.dialogsPage.dialogs[0].name}</span>
                    </div>
                    <div className={s.friendsItem}>
                        <img src={props.dialogsPage.dialogs[1].img} alt="q"/>
                        <span className={s.friendsName}>{props.dialogsPage.dialogs[1].name}</span>
                    </div>
                    <div className={s.friendsItem}>
                        <img src={props.dialogsPage.dialogs[2].img} alt="q"/>
                        <span className={s.friendsName}>{props.dialogsPage.dialogs[2].name}</span>
                    </div>
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