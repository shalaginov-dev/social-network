import {ACTIONS_TYPE} from "./action-types";

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
    dialogs: DialogType[]
    messages: MessageType[]
}

export type AddMessageAT = {
    type: ACTIONS_TYPE.ADD_MESSAGE
    payload: { messageText: string }
}
export type DialogsActionsType = AddMessageAT
