import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/preloader";

type ProfileInfoPropsType = {
    profile: any
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    className={s.mainImg}
                    src="https://img-fotki.yandex.ru/get/4700/202027913.2/0_b7e42_26e669d8_orig.jpg"
                    alt="background"/>
            </div>
            <div className={s.mainBlock}>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.small} alt="ava"/>
                    <div>{props.profile.fullName}</div>
                </div>
                <div className={s.aboutMe}>
                    <div>{props.profile.aboutMe}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo