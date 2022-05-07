import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './Profilestatus.module.css'

export const ProfileStatus = React.memo(() => {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState('pray for Ukraine')

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(title)
    }
    const activateViewMode = () => {
        setEditMode(false)
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            setEditMode(false)
        }

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
