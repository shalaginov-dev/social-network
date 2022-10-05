import {v1} from "uuid"
import {ACTIONS_TYPE} from "../types/action-types";
import {IInitialProfile, ProfileActionsType} from "../types/profile-types";



let initialState: IInitialProfile = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCounter: 2},
        {id: v1(), message: "It's my  first post", likesCounter: 5},
    ],
    profile: null,
    status: ''
}


export const profileReducer = (state: IInitialProfile = initialState, action: ProfileActionsType): IInitialProfile => {
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
