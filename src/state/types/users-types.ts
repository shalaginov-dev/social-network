import {ACTIONS_TYPE} from "./action-types";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../store";

type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: string
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
    name: string
    status: string
    location: LocationType
}
export type InitialUsersType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}


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

export type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, UsersActionsType>
