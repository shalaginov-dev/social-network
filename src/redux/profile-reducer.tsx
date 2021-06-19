import {v1} from "uuid"
import {ActionsType, StateProfileType } from "./state"

export const addPostAC = (postText: string) => ({
    type: "ADD-POST",
    postText: postText
}) as const
export const updateNewTextAC = (newText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText
}) as const

let initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCounter: 2},
        {id: v1(), message: "It's my  first post", likesCounter: 5},
    ],
    newPostText: ''
}

export const profileReducer = (state: StateProfileType = initialState, action: ActionsType) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: v1(),
                message: action.postText,
                likesCounter: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}