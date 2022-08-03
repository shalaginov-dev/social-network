import { useSelector} from "react-redux";
import {MyPosts} from "./MyPosts";
import React from "react";
import {compose} from "redux";
import {profilePage} from "../../../state/selectors";

export const MyPostContainer = () => {
    const {
        posts
    } = useSelector(profilePage)

    return (
        <MyPosts posts={posts}/>
    )
}

export default compose<React.ComponentType>(
)(MyPostContainer)



