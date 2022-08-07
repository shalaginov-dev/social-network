import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {ProfileType} from "../../state/reducers/profile-reducer";

export type ProfilePropsType = {
    profile: ProfileType | null
    status: string
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    )
}


