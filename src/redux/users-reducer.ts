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
}
type ActionsType = FollowAT | UnfollowAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT

let initialState: InitialUsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

export const usersReducer = (state: InitialUsersType = initialState, action: ActionsType): InitialUsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case 'SET-USERS':
            return {...state, users: action.payload.users}

        case 'SET-CURRENT-PAGE' :
            return {...state, currentPage: action.payload.currentPage}

        case 'SET-TOTAL-USERS-COUNT' :
            return {...state, totalUsersCount: action.payload.totalCount}

        default:
            return state
    }
}


export type FollowAT = {
    type: 'FOLLOW'
    payload: { userId: string }
}
export type UnfollowAT = {
    type: 'UNFOLLOW'
    payload: { userId: string }
}
export type SetUsersAT = {
    type: 'SET-USERS'
    payload: { users: Array<UsersType> }
}
export type SetCurrentPageAT = {
    type: 'SET-CURRENT-PAGE'
    payload: { currentPage: number }
}
export type SetTotalUsersCountAT = {
    type: 'SET-TOTAL-USERS-COUNT'
    payload: { totalCount: number }
}

export const FollowAC = (userId: string): FollowAT => ({
    type: 'FOLLOW',
    payload:{ userId },
}) as const
export const UnfollowAC = (userId: string): UnfollowAT => ({
    type: 'UNFOLLOW',
    payload: { userId },
}) as const
export const SetUsersAC = (users: Array<UsersType>): SetUsersAT => ({
    type: 'SET-USERS',
    payload: { users },
}) as const
export const SetCurrentPageAC = (currentPage: number): SetCurrentPageAT => ({
    type: 'SET-CURRENT-PAGE',
    payload:{currentPage},
}) as const
export const SetTotalUsersCountAC = (totalCount: number): SetTotalUsersCountAT => ({
    type: 'SET-TOTAL-USERS-COUNT',
    payload: {totalCount},
}) as const
