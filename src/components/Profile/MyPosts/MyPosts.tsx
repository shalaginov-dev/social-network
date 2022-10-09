import React, {memo} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {IAddPostFormData, AddPostReduxForm} from "../../Login/AddPostForm";
import {AddPost} from "../../../state/actions/profile-actions";
import {useAppDispatch} from "../../../state/hooks";
import {IPost} from "../../../state/types/profile-types";

interface IMyPostProps {
    posts: IPost[]
}

export const MyPosts = memo(({posts}: IMyPostProps) => {
    const dispatch = useAppDispatch()

    const onSubmit = (formData: IAddPostFormData) => {
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
                    posts.map(p => <Post key={p.id} message={p.message} likesCounter={p.likesCounter}/>)
                }
            </div>
        </div>
    )
})

