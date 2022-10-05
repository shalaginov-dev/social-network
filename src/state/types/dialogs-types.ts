import {ACTIONS_TYPE} from "./action-types";

export interface IDialog {
    id: string
    name: string
    img: string
}
export interface IMessage {
    id: string
    message: string
}
export interface IInitialDialogs {
    dialogs: IDialog[]
    messages: IMessage[]
}
export interface IAddMessage {
    type: ACTIONS_TYPE.ADD_MESSAGE
    payload: { messageText: string }
}

export type DialogsActionsType = IAddMessage
