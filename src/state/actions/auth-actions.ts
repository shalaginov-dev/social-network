import {authAPI} from "../../api/api";
import {ACTIONS_TYPE} from "./action-types";

export type DataType = {
    id: number | null
    email: string | null
    login: string | null
}

export type SetUserDataAT = {
    type: ACTIONS_TYPE.SET_USER_DATA
    payload: { data: DataType }
}

export type AuthActionsType = SetUserDataAT

export const SetAuthUserData = (data: DataType): SetUserDataAT => ({
    type: ACTIONS_TYPE.SET_USER_DATA,
    payload: {data},
})

export const GetAuthUserData = () => {
    return (dispatch: any) => {
        authAPI.me().then(res => res.resultCode === 0 && dispatch(SetAuthUserData(res.data)))
    }
}
