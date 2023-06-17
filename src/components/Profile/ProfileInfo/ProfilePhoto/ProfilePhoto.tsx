import s from "../ProfileInfo.module.scss";
import React, {ChangeEvent, useState} from "react";
import {UpdatePhoto} from "../../../../redux/actions/profile-actions";
import {useAppDispatch} from "../../../../redux/hooks";
import {MyProfile} from "../../../../redux/types/profile-types";

interface IProfilePhotoProps {
    profile: MyProfile | null
    isOwn: boolean
}

export const ProfilePhoto = ({profile, isOwn}: IProfilePhotoProps) => {
    const dispatch = useAppDispatch()

    const [changeMode, setChangeMode] = useState(false)

    const onPhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) dispatch(UpdatePhoto(e.currentTarget.files[0]))
    }

    const onMouseFocus = (value: boolean) => {
        setChangeMode(value)
    }
    return profile ?
        <div className={s.profilePhotoBlock}>
            <div className={s.imageContainer}>
                <img onMouseOver={() => {onMouseFocus(true)}}
                     onMouseOut={() => {onMouseFocus(false)}}
                     src={profile.photos.large}
                     alt="ava"/>
            </div>
            {isOwn &&
                <div className={changeMode ? s.selectImg : s.hideImg}
                     onMouseOver={() => {onMouseFocus(true)}}
                     onMouseOut={() => {onMouseFocus(false)
                }}>
                    <input id={'fileElem'} type='file' onChange={onPhotoChange}/>
                    <label htmlFor='fileElem'> Edit photo </label>
                </div>
            }
        </div> : null
}