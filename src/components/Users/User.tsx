import s from "./Users.module.css";
import cat from "../../assets/images/cat.png";
import React, {memo} from "react";
import {NavLink} from "react-router-dom";
import {Follow, Unfollow} from "../../state/actions/users-actions";
import {useAppDispatch} from "../../state/hooks";
import {IUser} from "../../state/types/users-types";
import {Pagination} from "../common/Pagination/Pagination";

interface IUserProps {
    user: IUser
    followingInProgress: Array<string>
}

export const User = memo(({user, followingInProgress,}: IUserProps) => {
    const dispatch = useAppDispatch()

    return (
        <div>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img alt={'ava'} src={user.photos.small || cat} className={s.userPhoto}/>
                </NavLink>
            </div>
            <div>
                {
                    user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            dispatch(Unfollow(user.id))
                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            dispatch(Follow(user.id))
                        }}>Follow</button>
                }
            </div>
            <span className={s.userInfo}>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </span>
            </span>
        </div>
    )
})