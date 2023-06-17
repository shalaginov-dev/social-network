import s from "../Dialogs.module.scss";
import {NavLink} from "react-router-dom";
import React, {memo} from "react";
import {IDialog} from "../../../redux/types/dialogs-types";


export const DialogItem = memo(({id, name, img}: IDialog) => {

    return (
        <div className={s.dialog}>
            <img src={img} alt="#" className={s.dialogImg}/>
            <div className={s.dialogName}>{name}</div>
        </div>
    )
})

