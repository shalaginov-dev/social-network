import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Users} from "./Users";
import {RequestUsers} from "../../state/actions/users-actions";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {Preloader} from "../common/Preloader/preloader";
import {usersPageSelector} from "../../state/selectors";

export const UsersContainer = () => {

    const dispatch = useDispatch()
    const {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching,
        followingInProgress,
    } = useSelector(usersPageSelector)

    useEffect(() => {
        dispatch(RequestUsers(currentPage, pageSize))
    }, [])

    const onPageChanged = (pageNumber: number) => {
        dispatch(RequestUsers(pageNumber, pageSize))
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