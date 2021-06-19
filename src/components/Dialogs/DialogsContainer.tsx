import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsType, StateDialogsType, StoreType} from "../../redux/state";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsContainerType = {
    store: StoreType
}

function DialogsContainer(props: DialogsContainerType) {

    let addMessage = (newMessageText: string) => {
        props.store.dispatch(addMessageAC(newMessageText))
    }
    let onSendMessageClick = (value: string) => {
        props.store.dispatch(updateNewMessageTextAC(value))
    }

    return (
        <Dialogs
            addMessage={addMessage}
            onSendMessageClick={onSendMessageClick}
            dialogsPage={props.store.getState().dialogsPage}
        />
    )
}

export default DialogsContainer