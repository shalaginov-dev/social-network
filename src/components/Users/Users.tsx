import s from "./Users.module.scss";
import React, {memo} from "react";
import {IUser} from "../../redux/types/users-types";
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User";

interface UsersProps {
    users: IUser[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: string[]
    onPageChanged: (pageNumber: number) => void
}

export const Users = memo(({users, pageSize, totalUsersCount, currentPage, followingInProgress, onPageChanged}: UsersProps) => {

    return (
        <div className={s.usersWrapper}>
            <Pagination
                pageSize={pageSize}
                totalItemsCount={totalUsersCount}
                currentPage={currentPage}
                portionSize={10}
                onPageChanged={onPageChanged}
            />
            {
                users.map(u => (
                        <User
                            followingInProgress={followingInProgress}
                            key={u.id}
                            user={u}
                        />
                    )
                )
            }
        </div>
    )
})