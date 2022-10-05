import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import s from './Profilestatus.module.css';
import {UpdateStatus} from "../../../state/actions/profile-actions";
import {useAppDispatch} from "../../../state/hooks";

interface IProfileStatusProps{
    status: string
}

export const ProfileStatus = React.memo(({status}: IProfileStatusProps) => {
    const dispatch = useAppDispatch()

    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(status)

    useEffect(()=> {
        setTitle(status)
    },[status])

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(title)
    }

    const activateViewMode = () => {
        setEditMode(false)
        dispatch(UpdateStatus(title))
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            setEditMode(false)
            dispatch(UpdateStatus(title))
        }
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        editMode
            ? <input
                value={title}
                onChange={onChangeTitleHandler}
                onBlur={activateViewMode}
                autoFocus
                onKeyPress={onKeyPressHandler}
            />
            : <span className={s.status} onDoubleClick={activateEditMode}>{title}</span>
    )
})
