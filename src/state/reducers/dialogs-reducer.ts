import {v1} from "uuid"
import {DialogsActionsType, IInitialDialogs} from "../types/dialogs-types";
import {ACTIONS_TYPE} from "../types/action-types";


let initialState: IInitialDialogs = {
    dialogs: [
        {
            id: v1(),
            name: 'Dimych',
            img: 'https://cdn4.vectorstock.com/i/1000x1000/94/38/avatar-flat-icon-on-black-background-black-style-vector-25959438.jpg'
        },
        {
            id: v1(),
            name: 'Andrey',
            img: 'https://cdn4.vectorstock.com/i/1000x1000/94/38/avatar-flat-icon-on-black-background-black-style-vector-25959438.jpg'
        },
        {
            id: v1(),
            name: 'Sveta',
            img: 'https://cdn4.vectorstock.com/i/1000x1000/94/38/avatar-flat-icon-on-black-background-black-style-vector-25959438.jpg'
        },
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your IT?'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yoo'},
        {id: v1(), message: 'Yooo'},
        {id: v1(), message: 'Yoooo'}
    ],
}

export const dialogsReducer = (state: IInitialDialogs = initialState, action: DialogsActionsType): IInitialDialogs => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_MESSAGE :
            return  {
                ...state,
                messages: [...state.messages, {id: v1(), message: action.payload.messageText}],
            }
        default:
            return state
    }
}