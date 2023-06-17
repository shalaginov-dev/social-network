import React, {memo} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.scss';
import {IPost, MyProfile} from "../../redux/types/profile-types";
import {MyPosts} from "./MyPosts/MyPosts";
import {MyPhotoBlock} from "./MyPhotoBlock/MyPhotoBlock";

export interface IProfileProps {
    profile: MyProfile | null
    posts: IPost[]
    status: string
    isOwn: boolean
}

export const Profile = memo(({profile, posts, status, isOwn}: IProfileProps) => {
    return profile
        ? <div className={s.profile}>
            <ProfileInfo profile={profile} status={status} isOwn={isOwn} />
            <hr/>
            <MyPhotoBlock/>
            <hr/>
            <MyPosts posts={posts} photos={profile.photos}/>
        </div> : null

})


