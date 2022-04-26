import {authAPI} from "../../api/api";


export enum ACTIONS_TYPE {
    SET_USER_DATA = 'SET_USER_DATA',

    ADD_MESSAGE = 'ADD_MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT',

    ADD_POST = 'ADD_POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
    SET_USER_PROFILE = 'SET_USER_PROFILE',

    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS',

}

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
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(SetAuthUserData(data.data))
                }
            })
    }
}