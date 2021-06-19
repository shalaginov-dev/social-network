import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsType, StateDialogsType, StoreType} from "../../redux/state";
import { addMessageAC, updateNewMessageTextAC } from "../../redux/dialogs-reducer";

type DialogsType = {
    addMessage: (newMessageText: string) => void
    onSendMessageClick: (value: string) => void
    dialogsPage: StateDialogsType
}

function Dialogs(props: DialogsType) {


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
                    onChange={(e) => {props.onSendMessageClick(e.currentTarget.value)}}
                />
                <button onClick={ () => {props.addMessage(props.dialogsPage.newMessageText)} }>Send</button>
            </div>
        </div>
    )
}

export default Dialogs