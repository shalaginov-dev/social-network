import {ACTIONS_TYPE} from "./action-types";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../store";

interface IContacts {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}
interface IPhotos {
    small: string
    large: string
}
export interface IPost {
    id: string
    message: string
    likesCounter: number
}
export interface IProfile {
    aboutMe: string
    contacts: IContacts
    lookingForAJob: boolean
    lookingForAJobDescription: string
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

export type ProfileActionsType = IAddPost | ISetUserProfile | ISetUserStatus | IUpdateUserStatus
export type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, ProfileActionsType>
