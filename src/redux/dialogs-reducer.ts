import {v1} from "uuid"

export type DialogType = {
    id: string
    name: string
    img: string
}
export type MessageType = {
    id: string
    message: string
}
export type InitialDialogsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
type ActionsType = AddMessageAT | UpdateNewMessageTextAT

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
            img: 'https://wlcat.ru/wp-content/uploads/2020/10/Cat-Wearing-COVID-19-Mask.jpg'
        },
        // {
        //     id: v1(),
        //     name: 'Sasha',
        //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYABUeQR1dMoqDCZYEkRsntwM5kqnADmv3zUvuQD7eHMnBZ2SmsWuCS8R3TEOmcIW-BLM&usqp=CAU'
        // },
        // {
        //     id: v1(),
        //     name: 'Viktor',
        //     img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg'
        // },
        // {
        //     id: v1(),
        //     name: 'Valera',
        //     img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/09C5/production/_116210520_neo4_976.jpg'
        // }
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your IT?'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yoo'},
        {id: v1(), message: 'Yooo'},
        {id: v1(), message: 'Yoooo'}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: InitialDialogsType = initialState, action: ActionsType): InitialDialogsType => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            let message = action.payload.messageText
            return  {
                ...state,
                messages: [...state.messages, {id: v1(), message: message}],
                newMessageText: ''
            }
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.payload.newMessage
            }
        default:
            return state
    }
}


export type AddMessageAT = {
    type: 'ADD-MESSAGE'
    payload: { messageText: string }
}
export type UpdateNewMessageTextAT = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    payload: { newMessage: string }
}

export const AddMessageAC = (messageText: string): AddMessageAT => ({
    type: 'ADD-MESSAGE',
    payload: {messageText},
}) as const
export const UpdateNewMessageTextAC = (newMessage: string): UpdateNewMessageTextAT => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    payload:{newMessage},
}) as const