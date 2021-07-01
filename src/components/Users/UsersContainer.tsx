import React from 'react';
import { connect } from 'react-redux';
import { StateType } from '../../redux/redux-store';
import { followAC, setUsersAC, unfollowAC, UsersType } from '../../redux/users-reducer';
import Users from './Users';

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userid: string) => {
            dispatch(followAC(userid))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}



export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)