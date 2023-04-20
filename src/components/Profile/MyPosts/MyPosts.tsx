import React, {memo} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {IAddPostFormData, AddPostReduxForm} from "../../Login/AddPostForm";
import {AddPost} from "../../../state/actions/profile-actions";
import {useAppDispatch} from "../../../state/hooks";
import {Photos, IPost, MyProfile} from "../../../state/types/profile-types";

export interface IMyPostProps {
    posts: IPost[]
    photos: Photos
}

export const MyPosts = memo(({posts, photos}: IMyPostProps) => {
    const dispatch = useAppDispatch()

    const onSubmit = (formData: IAddPostFormData) => {
        dispatch(AddPost(formData.newPostMessage))
    }

    return (
        <div className={s.postsBlock}>
            <h3>
                my posts
            </h3>
            <div>
                <AddPostReduxForm onSubmit={onSubmit}/>
            </div>
            <div className={s.posts}>
                {
                    posts.map(p => <Post key={p.id} message={p.message} likesCounter={p.likesCounter} photos={photos}/>)
                }
            </div>
        </div>
    )
})

