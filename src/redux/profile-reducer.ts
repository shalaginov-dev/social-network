import {v1} from "uuid"
import {ProfileType} from "../components/Profile/ProfileContainer";

export type PostType = {
    id: string
    message: string
    likesCounter: number
}
export type InitialProfileType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}
type ActionsType = AddPostAT | UpdateNewTextAT | SetUserProfileAT

let initialState: InitialProfileType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCounter: 2},
        {id: v1(), message: "It's my  first post", likesCounter: 5},
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state: InitialProfileType = initialState, action: ActionsType): InitialProfileType => {
    switch (action.type) {
        case 'ADD-POST':
            let message = state.newPostText
            return {
                ...state,
                posts: [...state.posts, {id: v1(), message: message, likesCounter: 0}],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.payload.newText
            }
        case 'SET-USER-PROFILE':
            return {...state, profile: action.payload.profile}
        default:
            return state
    }
}


export type AddPostAT = {
    type: 'ADD-POST'
}
export type UpdateNewTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    payload: { newText: string }
}
export type SetUserProfileAT = {
    type: 'SET-USER-PROFILE'
    payload: { profile: ProfileType }
}

export const AddPost = (): AddPostAT => ({
    type: 'ADD-POST',
}) as const
export const UpdateNewText = (newText: string): UpdateNewTextAT => ({
    type: 'UPDATE-NEW-POST-TEXT',
    payload: {newText},
}) as const
export const SetUserProfile = (profile: ProfileType): SetUserProfileAT => ({
    type: 'SET-USER-PROFILE',
    payload: {profile},
}) as const
