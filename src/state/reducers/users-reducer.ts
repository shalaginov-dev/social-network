import {ACTIONS_TYPE} from "../types/action-types";
import {InitialUsersType, UsersActionsType} from "../types/users-types";

const initialState: InitialUsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export const usersReducer = (state: InitialUsersType = initialState, action: UsersActionsType): InitialUsersType => {
    switch (action.type) {
        case ACTIONS_TYPE.FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case ACTIONS_TYPE.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case ACTIONS_TYPE.SET_USERS:
            return {...state, users: action.payload.users}
        case ACTIONS_TYPE.SET_CURRENT_PAGE :
            return {...state, currentPage: action.payload.currentPage}
        case ACTIONS_TYPE.SET_TOTAL_USERS_COUNT :
            return {...state, totalUsersCount: action.payload.totalCount}
        case ACTIONS_TYPE.TOGGLE_IS_FETCHING :
            return {...state, isFetching: action.payload.isFetching}
        case ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS :
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        default:
            return state
    }
}
