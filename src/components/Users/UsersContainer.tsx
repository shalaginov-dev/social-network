import React, {useEffect} from "react";
import {Users} from "./Users";
import {FetchUsers} from "../../state/actions/users-actions";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {Preloader} from "../common/Preloader/Preloader";
import {usersPageSelector} from "../../state/selectors";
import {useAppDispatch, useAppSelector} from "../../state/hooks";

export const UsersContainer = () => {
    const {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching,
        followingInProgress,
    } = useAppSelector(usersPageSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(FetchUsers(currentPage, pageSize))
    }, [])
    const onPageChanged = (pageNumber: number) => {
        dispatch(FetchUsers(pageNumber, pageSize))
    }

    return isFetching
        ? <Preloader/>
        : <Users
            users={users}
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
            currentPage={currentPage}
            followingInProgress={followingInProgress}
            onPageChanged={onPageChanged}
        />
}

export default compose<React.ComponentType>(
    withAuthRedirect,
)(UsersContainer)