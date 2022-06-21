import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfilePropsType} from "../Profile";

export const ProfileInfo = (props: ProfilePropsType) => {

    return !props.profile
        ? <Preloader/>
        : <div>
            <div className={s.mainBlock}>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.small} alt="ava"/>
                    <div>{props.profile.aboutMe}</div>
                </div>
                <div className={s.name}>
                    <div>{props.profile.fullName}</div>
                    <ProfileStatus {...props}/>
                </div>
            </div>
        </div>

}

