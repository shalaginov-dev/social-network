import React, {memo} from "react";
import s from './ProfileInfo.module.scss'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {MyProfile} from "../../../redux/types/profile-types";
import {ProfilePhoto} from "./ProfilePhoto/ProfilePhoto";
import {AboutMe} from "./AboutMe/AboutMe";

interface IProfileInfoProps {
    profile: MyProfile | null
    status: string
    isOwn: boolean
}

export const ProfileInfo = memo(({profile, status, isOwn}: IProfileInfoProps) => {
        return profile
            ? <div className={s.profileInfoBlock}>
                <ProfilePhoto profile={profile} isOwn={isOwn}/>
                <div className={s.profileName}>
                    <h3> {profile.fullName}</h3>
                    <ProfileStatus status={status}/>
                </div>
                <AboutMe toggleEditMode={() => {}} profile={profile} isOwn={isOwn}/>
            </div>
            : null
    }
)

