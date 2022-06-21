import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import s from './Profilestatus.module.css'
import {ProfilePropsType} from "../Profile";
import {useDispatch} from "react-redux";
import {UpdateStatus} from "../../../state/actions/profile-actions";

export const ProfileStatus = React.memo((props: ProfilePropsType) => {
    const dispatch = useDispatch()

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
