import {v1} from "uuid"
import {ProfileActionsType} from "../actions/profile-actions";
import {ACTIONS_TYPE} from "../actions/action-types";

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

let initialState: InitialProfileType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCounter: 2},
        {id: v1(), message: "It's my  first post", likesCounter: 5},
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: InitialProfileType = initialState, action: ProfileActionsType): InitialProfileType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: v1(), message: action.payload.newText, likesCounter: 0}],
            }
        case ACTIONS_TYPE.SET_USER_PROFILE:
            return {...state, profile: action.payload.profile}
        case ACTIONS_TYPE.SET_USER_STATUS:
            return {...state, status: action.payload.status}
        case ACTIONS_TYPE.UPDATE_USER_STATUS:
            return {...state, status: action.payload.status}
        default:
            return state
    }
}
