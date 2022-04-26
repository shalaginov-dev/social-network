import {v1} from "uuid"
import {ProfileType} from "../../components/Profile/ProfileContainer";
import {ACTIONS_TYPE} from "../actions/auth-actions";
import {ProfileActionsType} from "../actions/profile-actions";

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

let initialState: InitialProfileType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCounter: 2},
        {id: v1(), message: "It's my  first post", likesCounter: 5},
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state: InitialProfileType = initialState, action: ProfileActionsType): InitialProfileType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_POST:
            let message = state.newPostText
            return {
                ...state,
                posts: [...state.posts, {id: v1(), message: message, likesCounter: 0}],
                newPostText: ''
            }
        case ACTIONS_TYPE.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.payload.newText
            }
        case ACTIONS_TYPE.SET_USER_PROFILE:
            return {...state, profile: action.payload.profile}
        default:
            return state
    }
}
