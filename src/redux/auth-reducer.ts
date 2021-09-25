import {authAPI} from "../api/api";

export type DataType = {
    id: number | null
    email: string | null
    login: string | null
}
export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type ActionsType = SetUserDataAT

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload.data,
                isAuth: true
            }
        default:
            return state
    }
}

export type SetUserDataAT = {
    type: 'SET-USER-DATA'
    payload: { data: DataType }
}
export const SetAuthUserData = (data: DataType): SetUserDataAT => ({
    type: 'SET-USER-DATA',
    payload: {data},
}) as const

export const GetAuthUserData = () => {
    return (dispatch: any) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(SetAuthUserData(data.data))
                }
            })
    }
}