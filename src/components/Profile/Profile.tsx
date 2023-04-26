import React, {memo} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.scss';
import {IPost, MyProfile} from "../../state/types/profile-types";
import {MyPosts} from "./MyPosts/MyPosts";

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
            {/*<NameStatus/>*/}
            <MyPosts posts={posts} photos={profile.photos}/>
        </div> : null

})


