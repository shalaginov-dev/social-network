import {profileAPI} from "../../api/api";
import {ProfileType} from "../reducers/profile-reducer";
import {ACTIONS_TYPE} from "./action-types";

export type AddPostAT = {
    type: ACTIONS_TYPE.ADD_POST
}
export type UpdateNewTextAT = {
    type: ACTIONS_TYPE.UPDATE_NEW_POST_TEXT
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

export type ProfileActionsType = AddPostAT | UpdateNewTextAT | SetUserProfileAT | SetUserStatusAT | UpdateUserStatusAT

export const AddPost = (): AddPostAT => ({
    type: ACTIONS_TYPE.ADD_POST,
})
export const UpdateNewPostText = (newText: string): UpdateNewTextAT => ({
    type: ACTIONS_TYPE.UPDATE_NEW_POST_TEXT,
    payload: {newText},
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

export const GetProfile = (userId: string = '2') => {
    return (dispatch: any) => {
        profileAPI.getProfile(userId).then(res => dispatch(SetUserProfile(res)))
    }
}
export const GetStatus = (userId: string = '2') => {
    return (dispatch: any) => {
        profileAPI.getStatus(userId).then(res => dispatch(SetUserStatus(res.data)))
    }
}
export const UpdateStatus = (status: string) => {
    return (dispatch: any) => {
        profileAPI.updateStatus(status).then(res => res.data.resultCode === 0 && dispatch(UpdateUserStatus(status)))
    }
}