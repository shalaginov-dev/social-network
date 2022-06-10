import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import s from './Profilestatus.module.css'

type ProfileStatusType = {
    status: string
    UpdateStatus: (status: string) => void
}

export const ProfileStatus = React.memo((props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(props.status)

    useEffect(()=> {
        setTitle(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(title)
    }

    const activateViewMode = () => {
        setEditMode(false)
        props.UpdateStatus(title)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            setEditMode(false)
            props.UpdateStatus(title)
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
