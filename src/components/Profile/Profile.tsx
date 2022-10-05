import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import {IProfile} from "../../state/types/profile-types";

export interface IProfileProps {
    profile: IProfile | null
    status: string
}

export const Profile = (props: IProfileProps) => {

    return (
        <div className={s.profile}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    )
}


