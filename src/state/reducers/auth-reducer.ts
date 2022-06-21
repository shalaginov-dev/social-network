import {AuthActionsType} from "../actions/auth-actions";
import {ACTIONS_TYPE} from "../actions/action-types";

export type InitialAuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: InitialAuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: InitialAuthType = initialState, action: AuthActionsType): InitialAuthType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_USER_DATA:
            return {
                ...state,
                ...action.payload.data,
                isAuth: action.payload.isAuth
            }
        default:
            return state
    }
}