import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {AddMessageFormDataType, AddMessageReduxForm} from "../Login/AddMessageForm";
import {useDispatch} from "react-redux";
import {AddMessage} from "../../state/actions/dialogs-actions";
import {DialogType, MessageType} from "../../state/reducers/dialogs-reducer";

type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export const Dialogs = (props: DialogsPropsType) => {
    const dispatch = useDispatch()

    const onSubmit = (formData: AddMessageFormDataType) => {
        dispatch(AddMessage(formData.newDialogsMessage))
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {
                props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} img={d.img}/>)
            }
        </div>
        <div className={s.messages}>
            {
                props.messages.map(m => <Message key={m.id} message={m.message}/>)
            }
        </div>
        <div className={s.newMessage}>
            <AddMessageReduxForm onSubmit={onSubmit}/>
        </div>
    </div>
}

