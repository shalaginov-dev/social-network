import {ACTIONS_TYPE} from "./action-types";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../store";

interface ILocation  {
    city: string
    country: string
}
export interface IUsers {
    id: string
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
    name: string
    status: string
    location: ILocation
}
export interface IInitialUsers {
    users: Array<IUsers>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}
export interface IFollow {
    type: ACTIONS_TYPE.FOLLOW
    payload: { userId: string }
}
export interface IUnfollow {
    type: ACTIONS_TYPE.UNFOLLOW
    payload: { userId: string }
}
export interface ISetUsers {
    type: ACTIONS_TYPE.SET_USERS
    payload: { users: Array<IUsers> }
}
export interface ISetCurrentPage {
    type: ACTIONS_TYPE.SET_CURRENT_PAGE
    payload: { currentPage: number }
}
export interface ISetTotalUsersCount {
    type: ACTIONS_TYPE.SET_TOTAL_USERS_COUNT
    payload: { totalCount: number }
}
export interface IToggleIsFetching {
    type: ACTIONS_TYPE.TOGGLE_IS_FETCHING
    payload: { isFetching: boolean }
}
export interface IToggleIsFollowingProgress {
    type: ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS
    payload: {
        isFetching: boolean
        userId: string
    }
}

export type UsersActionsType =
    IFollow
    | IUnfollow
    | ISetUsers
    | ISetCurrentPage
    | ISetTotalUsersCount
    | IToggleIsFetching
    | IToggleIsFollowingProgress
export type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, UsersActionsType>
