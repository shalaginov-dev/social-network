import React from "react";
import {ActionsType, StateProfileType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePostType = {
    profilePage: StateProfileType
    dispatch: (action: ActionsType) => void
}

function Profile(props: ProfilePostType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                post={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile

