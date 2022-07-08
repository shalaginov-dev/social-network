import {profileAPI} from "../../api/api";
import {ProfileType} from "../reducers/profile-reducer";
import {ACTIONS_TYPE} from "./action-types";

export type AddPostAT = {
    type: ACTIONS_TYPE.ADD_POST
    payload: { newText: string }
}
export type SetUserProfileAT = {
    type: ACTIONS_TYPE.SET_USER_PROFILE
    payload: { profile: ProfileType }
}
export type SetUserStatusAT = {
    type: ACTIONS_TYPE.SET_USER_STATUS
    payload: { status: string }
}
export type UpdateUserStatusAT = {
    type: ACTIONS_TYPE.UPDATE_USER_STATUS
    payload: { status: string }
}
export type ProfileActionsType = AddPostAT | SetUserProfileAT | SetUserStatusAT | UpdateUserStatusAT

export const AddPost = (newText: string): AddPostAT => ({
    type: ACTIONS_TYPE.ADD_POST,
    payload: {newText,},
})

export const SetUserProfile = (profile: ProfileType): SetUserProfileAT => ({
    type: ACTIONS_TYPE.SET_USER_PROFILE,
    payload: {profile},
})

export const SetUserStatus = (status: string): SetUserStatusAT => ({
    type: ACTIONS_TYPE.SET_USER_STATUS,
    payload: {status},
})

export const UpdateUserStatus = (status: string): UpdateUserStatusAT => ({
    type: ACTIONS_TYPE.UPDATE_USER_STATUS,
    payload: {status},
})

export const GetProfile = (userId: string = '2'): any => {
    return async (dispatch: any) => {
        const data = await profileAPI.getProfile(userId)
        dispatch(SetUserProfile(data))
    }
}

export const GetStatus = (userId: string = '2'): any => {
    return async (dispatch: any) => {
        const data = await profileAPI.getStatus(userId)
        dispatch(SetUserStatus(data))
    }
}

export const UpdateStatus = (status: string): any => {
    return async (dispatch: any) => {
        const data = await profileAPI.updateStatus(status)
        data.resultCode === 0 && dispatch(UpdateUserStatus(status))
    }
}