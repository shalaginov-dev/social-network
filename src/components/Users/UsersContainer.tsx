import { connect } from 'react-redux';
import { StateType } from '../../redux/redux-store';
import {
    FollowAC,
    SetCurrentPageAC,
    SetTotalUsersCountAC,
    SetUsersAC,
    UnfollowAC,
    UsersType
} from '../../redux/users-reducer';
import Users from './Users';

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userid: string) => {
            dispatch(FollowAC(userid))
        },
        unfollow: (userId: string) => {
            dispatch(UnfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(SetUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(SetCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount:number) => {
          dispatch(SetTotalUsersCountAC(totalCount))
        },
    }
}



export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)