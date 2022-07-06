import {authAPI} from "../../api/api";
import {ACTIONS_TYPE} from "./action-types";

export type DataType = {
    id: number | null
    email: string | null
    login: string | null
}

export type SetUserDataAT = {
    type: ACTIONS_TYPE.SET_USER_DATA
    payload: { data: DataType, isAuth: boolean }
}

export type AuthActionsType = SetUserDataAT

export const SetAuthUserData = (data: DataType, isAuth: boolean): SetUserDataAT => ({
    type: ACTIONS_TYPE.SET_USER_DATA,
    payload: {data, isAuth},
})
export const GetAuthUserData = (): any => (dispatch: any) => {
    authAPI.me().then(res => res.resultCode === 0 && dispatch(SetAuthUserData(res.data, true)))
}
export const LogIn = (email: string, password: string, rememberMe: boolean = false): any => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(res => res.resultCode === 0 && dispatch(GetAuthUserData()))
}
export const LogOut = (): any => (dispatch: any) => {
    authAPI.logout()
        .then(res => res.resultCode === 0 && dispatch(SetAuthUserData( {id: null, email: null, login: null},false)))
}
