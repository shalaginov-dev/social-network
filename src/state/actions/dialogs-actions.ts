import {ACTIONS_TYPE} from "./action-types";

export type AddMessageAT = {
    type: ACTIONS_TYPE.ADD_MESSAGE
    payload: { messageText: string }
}
export type DialogsActionsType = AddMessageAT

export const AddMessage = (messageText: string): AddMessageAT => ({
    type: ACTIONS_TYPE.ADD_MESSAGE,
    payload: {messageText},
})