import {InitialProfileType} from "../../../state/reducers/profile-reducer";
import { useSelector} from "react-redux";
import {StateType} from "../../../state/store";
import {MyPosts} from "./MyPosts";
import React from "react";
import {compose} from "redux";

export const MyPostContainer = () => {
    const profilePage = useSelector<StateType, InitialProfileType>(state => state.profilePage)

    return (
        <MyPosts posts={profilePage.posts}/>
    )
}

export default compose<React.ComponentType>(
)(MyPostContainer)



