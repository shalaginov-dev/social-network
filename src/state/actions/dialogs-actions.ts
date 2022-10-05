import {IAddMessage} from "../types/dialogs-types";
import {ACTIONS_TYPE} from "../types/action-types";



export const AddMessage = (messageText: string): IAddMessage => ({
    type: ACTIONS_TYPE.ADD_MESSAGE,
    payload: {messageText},
})