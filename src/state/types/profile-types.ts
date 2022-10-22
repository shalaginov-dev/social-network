import {ACTIONS_TYPE} from "./action-types";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../store";

interface IContacts {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
}
export interface IPhotos {
    small: string
    large: string
}
export interface IPost {
    id: string
    message: string
    likesCounter: number
}
export interface IProfile {
    aboutMe: string | null
    contacts: IContacts
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: IPhotos
}
export interface IInitialProfile {
    posts: Array<IPost>
    profile: IProfile | null
    status: string
}
export interface IAddPost {
    type: ACTIONS_TYPE.ADD_POST
    payload: { newText: string }
}
export interface ISetUserProfile {
    type: ACTIONS_TYPE.SET_USER_PROFILE
    payload: { profile: IProfile }
}
export interface ISetUserStatus {
    type: ACTIONS_TYPE.SET_USER_STATUS
    payload: { status: string }
}
export interface IUpdateUserStatus {
    type: ACTIONS_TYPE.UPDATE_USER_STATUS
    payload: { status: string }
}
export interface IUpdateUserPhoto {
    type: ACTIONS_TYPE.UPDATE_USER_PHOTO
    payload: { photos: IPhotos }
}

export type ProfileActionsType = IAddPost | ISetUserProfile | ISetUserStatus | IUpdateUserStatus | IUpdateUserPhoto
export type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, ProfileActionsType>
