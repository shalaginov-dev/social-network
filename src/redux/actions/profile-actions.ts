import {profileAPI} from "../../api/api";
import {ACTIONS_TYPE} from "../types/action-types";
import {
    IAddPost, Photos, MyProfile,
    ISetUserProfile,
    ISetUserStatus, IUpdateUserPhoto,
    IUpdateUserStatus
} from "../types/profile-types";
import {ThunkType} from "../types/profile-types";
import {IAboutMeFormProps} from "../../components/Profile/ProfileInfo/AboutMe/AboutMeForm";


export const AddPost = (newText: string): IAddPost => ({
    type: ACTIONS_TYPE.ADD_POST,
    payload: {newText,},
})

export const SetUserProfile = (profile: MyProfile): ISetUserProfile => ({
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
export const UpdateUserPhoto = (photos: Photos): IUpdateUserPhoto => ({
    type: ACTIONS_TYPE.UPDATE_USER_PHOTO,
    payload: {photos: photos},
})


export const FetchProfile = (userId: string = '11641'): ThunkType => {
    return async (dispatch) => {
        const data = await profileAPI.getProfile(userId)
        dispatch(SetUserProfile(data))
    }
}

export const FetchStatus = (userId: string = '11641'): ThunkType => {
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

export const UpdatePhoto = (photo: any): ThunkType => {
    return async (dispatch) => {
        const data = await profileAPI.updatePhoto(photo)
        data.resultCode === 0 && dispatch(UpdateUserPhoto(data.data.photos))
    }
}
export const UpdateProfile = (formData: IAboutMeFormProps): ThunkType => {
    return async (dispatch, getState) => {
        const data = await profileAPI.updateProfile(formData)
        data.resultCode === 0 && dispatch(FetchProfile(String(getState().auth.id)))
    }
}