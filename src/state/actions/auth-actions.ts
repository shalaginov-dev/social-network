import {authAPI} from "../../api/api";
import {ACTIONS_TYPE} from "./action-types";
import {stopSubmit} from "redux-form";

export type DataType = {
    id: number | null
    email: string | null
    login: string | null
}
export type SetUserDataAT = {
    type: ACTIONS_TYPE.SET_USER_DATA
    payload: { data: DataType, isAuth: boolean }
}
export type InitializationAT = {
    type: ACTIONS_TYPE.INITIALIZATION_SUCCESS
}
export type AuthActionsType = SetUserDataAT | InitializationAT

export const SetAuthUserData = (data: DataType, isAuth: boolean): SetUserDataAT => ({
    type: ACTIONS_TYPE.SET_USER_DATA,
    payload: {data, isAuth},
})

export const InitializationSuccess = (): InitializationAT => ({
    type: ACTIONS_TYPE.INITIALIZATION_SUCCESS
})

export const GetAuthUserData = (): any => {
    return async (dispatch: any) => {
        const data = await authAPI.me()
        dispatch(InitializationSuccess())
        data.resultCode === 0 && dispatch(SetAuthUserData(data.data, true))
    }
}

export const LogIn = (email: string, password: string, rememberMe: boolean = false): any => {
    return async (dispatch: any) => {
        const data = await authAPI.login(email, password, rememberMe)
        data.resultCode === 0
            ? dispatch(GetAuthUserData())
            : dispatch(stopSubmit('login', {_error: data.messages}))
    }
}

export const LogOut = (): any => {
    return async (dispatch: any) => {
        const data = await authAPI.logout()
        data.resultCode === 0 && dispatch(SetAuthUserData({id: null, email: null, login: null}, false))
    }
}
