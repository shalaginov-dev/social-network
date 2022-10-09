import React, {memo} from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {IProfileProps} from "../Profile";

export const ProfileInfo = memo(({profile, status}: IProfileProps) => {

    return !profile
        ? <Preloader/>
        : <div>
            <div className={s.mainBlock}>
                <div className={s.descriptionBlock}>
                    <img src={profile.photos.small} alt="ava"/>
                    <div>{profile.aboutMe}</div>
                </div>
                <div className={s.name}>
                    <div>{profile.fullName}</div>
                    <ProfileStatus status={status}/>
                </div>
            </div>
        </div>
})

