import React, {ChangeEvent, KeyboardEvent, memo, useEffect, useState} from "react";
import s from './ProfileStatus.module.scss';
import {UpdateStatus} from "../../../../redux/actions/profile-actions";
import {useAppDispatch} from "../../../../redux/hooks";

interface IProfileStatusProps{
    status: string
}

export const ProfileStatus = memo(({status}: IProfileStatusProps) => {
    const dispatch = useAppDispatch()

    const [editMode, setEditMode] = useState(false)
    const [tempTitle, setTempTitle] = useState(status)

    useEffect(()=> {
        setTempTitle(status)
    },[status])

    const activateEditMode = () => {
        setEditMode(true)
        setTempTitle(tempTitle)
    }

    const activateViewMode = () => {
        setEditMode(false)
        dispatch(UpdateStatus(tempTitle))
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            setEditMode(false)
            dispatch(UpdateStatus(tempTitle))
        }
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTempTitle(e.currentTarget.value)
    }

    return (
        editMode
            ? <input
                value={tempTitle}
                onChange={onChangeTitleHandler}
                onBlur={activateViewMode}
                autoFocus
                onKeyPress={onKeyPressHandler}
            />
            : <div>
                <span className={s.status} onDoubleClick={activateEditMode}>{tempTitle}</span>
            </div>
    )
})
