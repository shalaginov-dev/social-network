import {ACTIONS_TYPE} from "./action-types";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../store";

export type ContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}
export type PhotosType = {
    small: string
    large: string
}
export type PostType = {
    id: string
    message: string
    likesCounter: number
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
export type InitialProfileType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
}

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
export type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, ProfileActionsType>
