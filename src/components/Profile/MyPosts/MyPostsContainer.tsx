import {IMyPostProps, MyPosts} from "./MyPosts";
import React, {memo} from "react";

export const MyPostContainer = memo(({posts, photos}: IMyPostProps) => {


    return (
        <MyPosts posts={posts} photos={photos}/>
    )
})





