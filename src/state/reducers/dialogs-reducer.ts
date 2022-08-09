import {v1} from "uuid"
import {DialogsActionsType, InitialDialogsType} from "../types/dialogs-types";
import {ACTIONS_TYPE} from "../types/action-types";


let initialState: InitialDialogsType = {
    dialogs: [
        {
            id: v1(),
            name: 'Dimych',
            img: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
        },
        {
            id: v1(),
            name: 'Andrey',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8rp-mtskOgky5nTQ9ky6ukU91Lr4FjhzWw&usqp=CAU'
        },
        {
            id: v1(),
            name: 'Sveta',
            img: 'https://c.ndtvimg.com/2020-08/h5mk7js_cat-generic_625x300_28_August_20.jpg?im=Resize=(1230,900)'
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

export const dialogsReducer = (state: InitialDialogsType = initialState, action: DialogsActionsType): InitialDialogsType => {
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