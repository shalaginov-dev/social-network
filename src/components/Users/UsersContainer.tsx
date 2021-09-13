import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {
    Follow,
    SetCurrentPage,
    SetTotalUsersCount,
    SetUsers, ToggleFollowingProgress, ToggleIsFetching,
    Unfollow,
    UsersType
} from '../../redux/users-reducer';
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/preloader";
import {usersAPI} from "../../api/api";

export type UsersContainerPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
    Follow: (userid: string) => void
    Unfollow: (userId: string) => void
    SetUsers: (users: Array<UsersType>) => void
    SetCurrentPage: (currentPage: number) => void
    SetTotalUsersCount: (totalCount: number) => void
    ToggleIsFetching: (isFetching: boolean) => void
    ToggleFollowingProgress: (isFetching: boolean, userId: string) => void
}

export class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.ToggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.ToggleIsFetching(false)
                this.props.SetUsers(data.items)
                this.props.SetTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.SetCurrentPage(pageNumber)
        this.props.ToggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.ToggleIsFetching(false)
                this.props.SetUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.Follow}
                unfollow={this.props.Unfollow}
                toggleFollowingProgress={this.props.ToggleFollowingProgress}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    Follow,
    Unfollow,
    SetUsers,
    SetCurrentPage,
    SetTotalUsersCount,
    ToggleIsFetching,
    ToggleFollowingProgress,
})(UsersContainer)