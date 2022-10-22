import React, {memo, useState} from "react";
import s from './ProfileInfo.module.css'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {IProfile} from "../../../state/types/profile-types";
import {AboutMe} from "./AboutMe/AboutMe";
import {ProfilePhoto} from "./ProfilePhoto/ProfilePhoto";
import {AboutMeEditForm, IAboutMeFormProps} from "./AboutMe/AboutMeForm";
import {useAppDispatch} from "../../../state/hooks";
import {UpdateProfile} from "../../../state/actions/profile-actions";

interface IProfileInfoProps {
    profile: IProfile | null
    status: string
    isOwn: boolean
}

export const ProfileInfo = memo(({profile, status, isOwn}: IProfileInfoProps) => {
        const dispatch = useAppDispatch()
        const [editMode, setEditMode] = useState(false)

        const onSubmit = (formData: IAboutMeFormProps) => {
            dispatch(UpdateProfile(formData))
            setEditMode(false)
        }

    return profile
            ? <div className={s.profileInfoBlock}>
                <ProfilePhoto profile={profile} isOwn={isOwn}/>
                <ProfileStatus status={status}/>
                {editMode
                    // @ts-ignore
                    ? <AboutMeEditForm initialValues={profile} onSubmit={onSubmit}/>
                    : <AboutMe toggleEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwn={isOwn}/>
                }

            </div> : null
    }
)

