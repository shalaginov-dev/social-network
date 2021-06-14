import { v1 } from "uuid"
import {ActionsType, StateDialogsType } from "./state"

export const addMessageAC = (messageText: string) => ({
    type: "ADD-MESSAGE",
    messageText: messageText
}) as const
export const updateNewMessageTextAC = (newMessage: string) => ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newMessage: newMessage
}) as const

export const dialogsReducer = (state: StateDialogsType, action: ActionsType) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: v1(),
                message: action.messageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}