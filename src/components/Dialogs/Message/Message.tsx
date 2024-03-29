import s from "../Dialogs.module.scss";
import React, {memo} from "react";

interface IMessage {
    message: string | number
}

export const Message = memo(({message}: IMessage) => {

    return <div className={s.message}>{message}</div>
})

