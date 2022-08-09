import {MyPosts} from "./MyPosts";
import React from "react";
import {compose} from "redux";
import {profilePage} from "../../../state/selectors";
import {useAppSelector} from "../../../state/hooks";

export const MyPostContainer = () => {
    const {
        posts
    } = useAppSelector(profilePage)

    return (
        <MyPosts posts={posts}/>
    )
}

export default compose<React.ComponentType>(
)(MyPostContainer)



