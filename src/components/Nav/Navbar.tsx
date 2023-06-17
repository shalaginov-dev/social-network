import React, {memo} from "react";
import {NavLink} from "react-router-dom";
import s from "./Nav.module.scss"
import {INavigation} from "../../redux/reducers/sidebar-reducer";
import {IDialog} from "../../redux/types/dialogs-types";

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
            <div className={s.navFooter}>
                <div className={s.musicBlock}>
                    <h5>Linkin Park - numb</h5>
                    <div className={s.player}>
                        <button className={s.pre}>
                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 13.17v3.33a1 1 0 1 1-2 0v-9a1 1 0 0 1 2 0v3.33l8.15-4.66c.82-.48 1.85.11 1.85 1.06v9.54c0 .95-1.03 1.54-1.85 1.06z"
                                    fill="#A2A2A2FF">
                                </path>
                            </svg>
                        </button>
                        <button className={s.play}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M18.5 11.13a1 1 0 0 1 0 1.74l-9 5.2A1 1 0 0 1 8 17.2V6.8a1 1 0 0 1 1.5-.86l9 5.2Z"
                                    fill="#A2A2A2FF">
                                </path>
                            </svg>
                        </button>
                        <button className={s.next}>
                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14 10.83V7.5a1 1 0 1 1 2 0v9a1 1 0 0 1-2 0v-3.33l-8.15 4.66A1.23 1.23 0 0 1 4 16.77V7.23c0-.95 1.03-1.54 1.85-1.06z"
                                    fill="#A2A2A2FF">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <hr/>
                <div className={s.friends}>
                    <span className={s.friendsTitle}>Friends online 4</span>
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
            </div>
        </nav>
    )
})


