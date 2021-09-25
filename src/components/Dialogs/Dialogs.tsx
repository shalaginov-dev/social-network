import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {InitialDialogsType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";

type DialogsType = {
    dialogsPage: InitialDialogsType
    isAuth: boolean
    UpdateNewMessageText: (value: string) => void
    AddMessage: (newMessageText: string) => void
}

function Dialogs(props: DialogsType) {

    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} img={d.img}/>)
                }
            </div>
            <div className={s.messages}>
                {
                    props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)
                }
            </div>
            <div className={s.newMessage}>
                <textarea
                    placeholder='Enter your message'
                    value={props.dialogsPage.newMessageText}
                    onChange={(e) => {
                        props.UpdateNewMessageText(e.currentTarget.value)
                    }}
                />
                <button onClick={() => {
                    props.AddMessage(props.dialogsPage.newMessageText)
                }}>Send
                </button>
            </div>
        </div>
    )
}

export default Dialogs