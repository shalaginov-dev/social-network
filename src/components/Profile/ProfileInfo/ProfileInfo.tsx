import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileContainerPropsType} from "../ProfileContainer";

function ProfileInfo(props: ProfileContainerPropsType) {
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

export default ProfileInfo