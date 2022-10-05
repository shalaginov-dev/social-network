import s from "./Users.module.css";
import cat from "../../assets/images/cat.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {Follow, Unfollow} from "../../state/actions/users-actions";
import {useAppDispatch} from "../../state/hooks";
import {IUsers} from "../../state/types/users-types";

interface IUsersProps {
    users: Array<IUsers>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: Array<string>
    onPageChanged: (pageNumber: number) => void
}

export const Users = ({ users, pageSize, totalUsersCount, currentPage, followingInProgress, onPageChanged}: IUsersProps) => {
    const dispatch = useAppDispatch()

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.userWrapper}>
            <div className={s.pageWrapper}>
                {
                    pages.map(p => <span
                        key={p}
                        className={currentPage === p ? s.selectedPage : s.page}
                        onClick={() => {
                            onPageChanged(p)
                        }}
                    >{p}</span>)
                }
            </div>
            {
                users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                  <img alt={'ava'} src={u.photos.small || cat} className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                    dispatch(Unfollow(u.id))
                                }}>Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                    dispatch(Follow(u.id))
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span className={s.userInfo}>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}