import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/preloader";
import {ProfileType} from "../ProfileContainer";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

function ProfileInfo(props: ProfileInfoPropsType) {

    return !props.profile
        ? <Preloader/>
        : <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        className={s.mainImg}*/}
            {/*        src="https://img-fotki.yandex.ru/get/4700/202027913.2/0_b7e42_26e669d8_orig.jpg"*/}
            {/*        alt="background"/>*/}
            {/*</div>*/}
            <div className={s.mainBlock}>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.small} alt="ava"/>
                    <div>{props.profile.aboutMe}</div>
                </div>
                <div className={s.name}>
                    <div>{props.profile.fullName}</div>
                    <ProfileStatus/>
                </div>
            </div>
        </div>

}

export default ProfileInfo