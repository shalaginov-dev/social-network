import {AddMessageAT} from "../types/dialogs-types";
import {ACTIONS_TYPE} from "../types/action-types";



export const AddMessage = (messageText: string): AddMessageAT => ({
    type: ACTIONS_TYPE.ADD_MESSAGE,
    payload: {messageText},
})