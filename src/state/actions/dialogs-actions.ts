import {ACTIONS_TYPE} from "./action-types";

export type AddMessageAT = {
    type: ACTIONS_TYPE.ADD_MESSAGE
    payload: { messageText: string }
}
export type UpdateNewMessageTextAT = {
    type: ACTIONS_TYPE.UPDATE_NEW_MESSAGE_TEXT
    payload: { newMessage: string }
}
export type DialogsActionsType = AddMessageAT | UpdateNewMessageTextAT

export const AddMessage = (messageText: string): AddMessageAT => ({
    type: ACTIONS_TYPE.ADD_MESSAGE,
    payload: {messageText},
})
export const UpdateNewMessageText = (newMessage: string): UpdateNewMessageTextAT => ({
    type: ACTIONS_TYPE.UPDATE_NEW_MESSAGE_TEXT,
    payload:{newMessage},
})