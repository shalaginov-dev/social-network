import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {AddPostFormDataType, AddPostReduxForm} from "../../Login/AddPostForm";
import {AddPost} from "../../../state/actions/profile-actions";
import {useAppDispatch} from "../../../state/hooks";
import {IPost} from "../../../state/types/profile-types";

type MyPostPropsType = {
    posts: IPost[]
}

export const MyPosts = (props: MyPostPropsType) => {
    const dispatch = useAppDispatch()

    const onSubmit = (formData: AddPostFormDataType) => {
        dispatch(AddPost(formData.newPostMessage))
    }

    return (
        <div className={s.postsBlock}>
            <h3>
                my post
            </h3>
            <div>
                <AddPostReduxForm onSubmit={onSubmit}/>
            </div>
            <div className={s.posts}>
                {
                    props.posts.map(p => <Post key={p.id} message={p.message} likesCounter={p.likesCounter}/>)
                }
            </div>
        </div>
    )
}

