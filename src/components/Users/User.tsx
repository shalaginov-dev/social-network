import s from "./Users.module.scss";
import cat from "../../assets/images/cat.png";
import React, {memo} from "react";
import {NavLink} from "react-router-dom";
import {Follow, Unfollow} from "../../redux/actions/users-actions";
import {useAppDispatch} from "../../redux/hooks";
import {IUser} from "../../redux/types/users-types";

interface IUserProps {
    user: IUser
    followingInProgress: Array<string>
}

export const User = memo(({user, followingInProgress,}: IUserProps) => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <div>
                <NavLink to={`/profile/${user.id}`}>
                    <img alt={'ava'} src={user.photos.small || cat} className={s.userPhoto}/>
                </NavLink>
            </div>
            <h4>
                {user.name}
            </h4>
            <div>
                {
                    user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {dispatch(Unfollow(user.id))}}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {dispatch(Follow(user.id))}}>Follow</button>
                }
            </div>
        </div>
    )
})