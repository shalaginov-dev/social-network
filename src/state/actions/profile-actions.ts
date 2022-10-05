import {profileAPI} from "../../api/api";
import {ACTIONS_TYPE} from "../types/action-types";
import {
    IAddPost, IProfile,
    ISetUserProfile,
    ISetUserStatus,
    IUpdateUserStatus
} from "../types/profile-types";
import {ThunkType} from "../types/profile-types";


export const AddPost = (newText: string): IAddPost => ({
    type: ACTIONS_TYPE.ADD_POST,
    payload: {newText,},
})

export const SetUserProfile = (profile: IProfile): ISetUserProfile => ({
    type: ACTIONS_TYPE.SET_USER_PROFILE,
    payload: {profile},
})

export const SetUserStatus = (status: string): ISetUserStatus => ({
    type: ACTIONS_TYPE.SET_USER_STATUS,
    payload: {status},
})

export const UpdateUserStatus = (status: string): IUpdateUserStatus => ({
    type: ACTIONS_TYPE.UPDATE_USER_STATUS,
    payload: {status},
})


export const FetchProfile = (userId: string = '2'): ThunkType => {
    return async (dispatch) => {
        const data = await profileAPI.getProfile(userId)
        dispatch(SetUserProfile(data))
    }
}

export const FetchStatus = (userId: string = '2'): ThunkType => {
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