import React, {memo} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import {IPost, IProfile} from "../../state/types/profile-types";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";

export interface IProfileProps {
    profile: IProfile | null
    posts: IPost[]
    status: string
    isOwn: boolean
}

export const Profile = memo(({profile, posts, status, isOwn}: IProfileProps) => {

    return profile
        ? <div className={s.profile}>
            <ProfileInfo profile={profile} status={status} isOwn={isOwn} />
            <MyPostContainer posts={posts} photos={profile.photos}/>
        </div> : null

})


