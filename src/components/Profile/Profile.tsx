import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileContainerPropsType} from "./ProfileContainer";
import s from './Profile.module.css'

function Profile(props: ProfileContainerPropsType) {

    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile

