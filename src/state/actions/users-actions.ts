import {usersAPI} from "../../api/api";
import {UsersType} from "../reducers/users-reducer";
import {ACTIONS_TYPE} from "./action-types";

export type FollowAT = {
    type: ACTIONS_TYPE.FOLLOW
    payload: { userId: string }
}
export type UnfollowAT = {
    type: ACTIONS_TYPE.UNFOLLOW
    payload: { userId: string }
}
export type SetUsersAT = {
    type: ACTIONS_TYPE.SET_USERS
    payload: { users: Array<UsersType> }
}
export type SetCurrentPageAT = {
    type: ACTIONS_TYPE.SET_CURRENT_PAGE
    payload: { currentPage: number }
}
export type SetTotalUsersCountAT = {
    type: ACTIONS_TYPE.SET_TOTAL_USERS_COUNT
    payload: { totalCount: number }
}
export type ToggleIsFetchingAT = {
    type: ACTIONS_TYPE.TOGGLE_IS_FETCHING
    payload: { isFetching: boolean }
}
export type ToggleIsFollowingProgressAT = {
    type: ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS
    payload: {
        isFetching: boolean
        userId: string
    }
}

export type UsersActionsType =
    FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalUsersCountAT
    | ToggleIsFetchingAT
    | ToggleIsFollowingProgressAT


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



export const GetUsers = (currentPage: number, pageSize: number): any => {
    return async (dispatch: any) => {
        dispatch(SetCurrentPage(currentPage))
        dispatch(ToggleIsFetching(true))
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(ToggleIsFetching(false))
        dispatch(SetUsers(data.items))
        dispatch(SetTotalUsersCount(data.totalCount))
    }
}
export const Follow = (userId: string): any => {
    return async (dispatch: any) => {
        dispatch(ToggleFollowingProgress(true, userId))
        const data = await usersAPI.follow(userId)
        data.resultCode === 0 && dispatch(FollowSuccess(userId))
        dispatch(ToggleFollowingProgress(false, userId))
    }
}
export const Unfollow = (userId: string): any => {
    return async (dispatch: any) => {
        dispatch(ToggleFollowingProgress(true, userId))
        const data = await usersAPI.unfollow(userId)
        data.resultCode === 0 && dispatch(UnfollowSuccess(userId))
        dispatch(ToggleFollowingProgress(false, userId))
    }
}
