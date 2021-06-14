import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsType, StateDialogsType} from "../../redux/state";
import { addMessageAC, updateNewMessageTextAC } from "../../redux/dialogs-reducer";

type DialogsType = {
    dialogsPage: StateDialogsType
    dispatch: (action: ActionsType) => void
}

function Dialogs(props: DialogsType) {


    let addMessage = () => {
        props.dispatch(addMessageAC(props.dialogsPage.newMessageText))
    }
    let onSendMessageClick = (value: string) => {
        props.dispatch(updateNewMessageTextAC(value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>)
                }
            </div>
            <div className={s.messages}>
                {
                    props.dialogsPage.messages.map(m => <Message message={m.message}/>)
                }
            </div>
            <div className={s.newMessage}>
                <textarea
                    placeholder='Enter your message'
                    value={props.dialogsPage.newMessageText}
                    onChange={(e) => {onSendMessageClick(e.currentTarget.value)}}
                />
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs