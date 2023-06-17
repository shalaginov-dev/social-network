import {usersAPI} from "../../api/api";
import {ACTIONS_TYPE} from "../types/action-types";
import {
    IFollow,
    ISetCurrentPage,
    ISetTotalUsersCount,
    ISetUsers, ThunkType,
    IToggleIsFetching, IToggleIsFollowingProgress,
    IUnfollow, IUser,
} from "../types/users-types";


export const FollowSuccess = (userId: string): IFollow => ({
    type: ACTIONS_TYPE.FOLLOW,
    payload: {userId},
})
export const UnfollowSuccess = (userId: string): IUnfollow => ({
    type: ACTIONS_TYPE.UNFOLLOW,
    payload: {userId},
})
export const SetUsers = (users: Array<IUser>): ISetUsers => ({
    type: ACTIONS_TYPE.SET_USERS,
    payload: {users},
})
export const SetCurrentPage = (currentPage: number): ISetCurrentPage => ({
    type: ACTIONS_TYPE.SET_CURRENT_PAGE,
    payload: {currentPage},
})
export const SetTotalUsersCount = (totalCount: number): ISetTotalUsersCount => ({
    type: ACTIONS_TYPE.SET_TOTAL_USERS_COUNT,
    payload: {totalCount},
})
export const ToggleIsFetching = (isFetching: boolean): IToggleIsFetching => ({
    type: ACTIONS_TYPE.TOGGLE_IS_FETCHING,
    payload: {isFetching},
})
export const ToggleFollowingProgress = (isFetching: boolean, userId: string): IToggleIsFollowingProgress => ({
    type: ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: {isFetching, userId},
})


export const FetchUsers = (page: number, pageSize: number): ThunkType => {
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
