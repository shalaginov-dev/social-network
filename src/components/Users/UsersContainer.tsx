import {connect} from 'react-redux';
import {StateType} from '../../state/store';
import {
    UsersType
} from '../../state/reducers/users-reducer';
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/preloader";
import {Follow, GetUsers, Unfollow} from "../../state/actions/users-actions";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type UsersContainerPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
    GetUsers: (currentPage: number, pageSize: number) => void
    Follow: (userId: string) => void
    Unfollow: (userId: string) => void
}

export class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.GetUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.GetUsers(pageNumber, this.props.pageSize)
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
                onPageChanged={this.onPageChanged}
                Follow={this.props.Follow}
                Unfollow={this.props.Unfollow}
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, {GetUsers, Follow, Unfollow,}),
    withAuthRedirect,
)(UsersContainer)