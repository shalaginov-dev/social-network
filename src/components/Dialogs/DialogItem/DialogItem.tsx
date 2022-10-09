import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React, {memo} from "react";
import {IDialog} from "../../../state/types/dialogs-types";


export const DialogItem = memo(({id, name, img}: IDialog) => {

    return <div className={s.dialog}>
        <img src={img} alt="#" className={s.dialogImg}/>
        <NavLink className={s.dialogName} to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
})

