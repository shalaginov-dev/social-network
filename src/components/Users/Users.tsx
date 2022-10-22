import s from "./Users.module.css";
import React, {memo} from "react";
import {IUser} from "../../state/types/users-types";
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User";

interface IUsersProps {
    users: IUser[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: string[]
    onPageChanged: (pageNumber: number) => void
}

export const Users = memo(({
                               users,
                               pageSize,
                               totalUsersCount,
                               currentPage,
                               followingInProgress,
                               onPageChanged
                           }: IUsersProps) => {

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