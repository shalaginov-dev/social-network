import React, {memo} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {IAddMessageFormData, AddMessageReduxForm} from "../Login/AddMessageForm";
import {AddMessage} from "../../state/actions/dialogs-actions";
import {useAppDispatch} from "../../state/hooks";
import {IDialog, IMessage} from "../../state/types/dialogs-types";


interface IDialogsProps {
    dialogs: IDialog[]
    messages: IMessage[]
}

export const Dialogs = memo(({dialogs, messages}: IDialogsProps) => {
    const dispatch = useAppDispatch()

    const onSubmit = (formData: IAddMessageFormData) => {
        dispatch(AddMessage(formData.newDialogsMessage))
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {
                dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} img={d.img}/>)
            }
        </div>
        <div className={s.messages}>
            {
                messages.map(m => <Message key={m.id} message={m.message}/>)
            }
        </div>
        <div className={s.newMessage}>
            <AddMessageReduxForm onSubmit={onSubmit}/>
        </div>
    </div>
})

