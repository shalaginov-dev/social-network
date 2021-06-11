import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsType, addMessageAC, StateDialogsType, updateNewMessageTextAC} from "../../redux/state";

type DialogsType = {
    dialogsPage: StateDialogsType
    dispatch: (action: ActionsType) => void
}

function Dialogs(props: DialogsType) {


    let addMessage = () => {
        props.dispatch(addMessageAC(props.dialogsPage.newMessageText))
    }
    let onMessageChange = (value: string) => {
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
                <textarea value={props.dialogsPage.newMessageText}
                          onChange={(e) => {onMessageChange(e.currentTarget.value)} }/>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs