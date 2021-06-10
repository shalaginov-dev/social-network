import React from "react";
import s from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    className={s.mainImg}
                    src="https://img-fotki.yandex.ru/get/4700/202027913.2/0_b7e42_26e669d8_orig.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo