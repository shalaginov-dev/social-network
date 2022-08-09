import {profileAPI} from "../../api/api";
import {ACTIONS_TYPE} from "../types/action-types";
import {
    AddPostAT, ProfileType,
    SetUserProfileAT,
    SetUserStatusAT,
    UpdateUserStatusAT
} from "../types/profile-types";
import {ThunkType} from "../types/profile-types";


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


export const GetProfile = (userId: string = '2'): ThunkType => {
    return async (dispatch) => {
        const data = await profileAPI.getProfile(userId)
        dispatch(SetUserProfile(data))
    }
}

export const GetStatus = (userId: string = '2'): ThunkType => {
    return async (dispatch) => {
        const data = await profileAPI.getStatus(userId)
        dispatch(SetUserStatus(data))
    }
}

export const UpdateStatus = (status: string): ThunkType => {
    return async (dispatch) => {
        const data = await profileAPI.updateStatus(status)
        data.resultCode === 0 && dispatch(UpdateUserStatus(status))
    }
}