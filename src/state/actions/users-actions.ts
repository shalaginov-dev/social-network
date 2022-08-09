import {usersAPI} from "../../api/api";
import {ACTIONS_TYPE} from "../types/action-types";
import {
    FollowAT,
    SetCurrentPageAT,
    SetTotalUsersCountAT,
    SetUsersAT, ThunkType,
    ToggleIsFetchingAT, ToggleIsFollowingProgressAT,
    UnfollowAT, UsersType,
} from "../types/users-types";


export const FollowSuccess = (userId: string): FollowAT => ({
    type: ACTIONS_TYPE.FOLLOW,
    payload: {userId},
})
export const UnfollowSuccess = (userId: string): UnfollowAT => ({
    type: ACTIONS_TYPE.UNFOLLOW,
    payload: {userId},
})
export const SetUsers = (users: Array<UsersType>): SetUsersAT => ({
    type: ACTIONS_TYPE.SET_USERS,
    payload: {users},
})
export const SetCurrentPage = (currentPage: number): SetCurrentPageAT => ({
    type: ACTIONS_TYPE.SET_CURRENT_PAGE,
    payload: {currentPage},
})
export const SetTotalUsersCount = (totalCount: number): SetTotalUsersCountAT => ({
    type: ACTIONS_TYPE.SET_TOTAL_USERS_COUNT,
    payload: {totalCount},
})
export const ToggleIsFetching = (isFetching: boolean): ToggleIsFetchingAT => ({
    type: ACTIONS_TYPE.TOGGLE_IS_FETCHING,
    payload: {isFetching},
})
export const ToggleFollowingProgress = (isFetching: boolean, userId: string): ToggleIsFollowingProgressAT => ({
    type: ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: {isFetching, userId},
})


export const RequestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(SetCurrentPage(page))
        dispatch(ToggleIsFetching(true))
        const data = await usersAPI.getUsers(page, pageSize)
        dispatch(ToggleIsFetching(false))
        dispatch(SetUsers(data.items))
        dispatch(SetTotalUsersCount(data.totalCount))
    }
}
export const Follow = (userId: string): ThunkType => {
    return async (dispatch) => {
        dispatch(ToggleFollowingProgress(true, userId))
        const data = await usersAPI.follow(userId)
        data.resultCode === 0 && dispatch(FollowSuccess(userId))
        dispatch(ToggleFollowingProgress(false, userId))
    }
}
export const Unfollow = (userId: string): ThunkType => {
    return async (dispatch) => {
        dispatch(ToggleFollowingProgress(true, userId))
        const data = await usersAPI.unfollow(userId)
        data.resultCode === 0 && dispatch(UnfollowSuccess(userId))
        dispatch(ToggleFollowingProgress(false, userId))
    }
}
