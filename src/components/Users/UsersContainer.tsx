import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../../state/store';
import {InitialUsersType,} from '../../state/reducers/users-reducer';
import React, {useEffect} from "react";
import {Users} from "./Users";
import {GetUsers} from "../../state/actions/users-actions";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {Preloader} from "../common/Preloader/preloader";

export const UsersContainer = () => {
    const usersPage = useSelector<RootStateType, InitialUsersType>(state => state.usersPage)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(GetUsers(usersPage.currentPage, usersPage.pageSize))
    }, [])

    const onPageChanged = (pageNumber: number) => {
        dispatch(GetUsers(pageNumber, usersPage.pageSize))
    }

    return usersPage.isFetching
        ? <Preloader/>
        : <Users
            users={usersPage.users}
            pageSize={usersPage.pageSize}
            totalUsersCount={usersPage.totalUsersCount}
            currentPage={usersPage.currentPage}
            followingInProgress={usersPage.followingInProgress}
            onPageChanged={onPageChanged}
        />
}

export default compose<React.ComponentType>(
    withAuthRedirect,
)(UsersContainer)