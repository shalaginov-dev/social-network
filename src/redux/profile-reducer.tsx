import {v1} from "uuid"

export type PostType = {
    id: string
    message: string
    likesCounter: number
}
export type InitialProfileType = {
    posts: Array<PostType>
    newPostText: string
}
type ActionsType = AddPostACType | UpdateNewTextACType

let initialState: InitialProfileType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCounter: 2},
        {id: v1(), message: "It's my  first post", likesCounter: 5},
    ],
    newPostText: ''
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
            newPostText: action.newText
        }
        default:
            return state
    }
}


export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdateNewTextACType = ReturnType<typeof updateNewTextAC>
export const addPostAC = () => ({type: "ADD-POST"}) as const
export const updateNewTextAC = (newText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText
}) as const
