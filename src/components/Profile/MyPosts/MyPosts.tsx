import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {AddPostFormDataType, AddPostReduxForm} from "../../Login/AddPostForm";
import {useDispatch} from "react-redux";
import {AddPost} from "../../../state/actions/profile-actions";
import {PostType} from "../../../state/reducers/profile-reducer";

type MyPostPropsType = {
    posts: PostType[]
}

export const MyPosts = (props: MyPostPropsType) => {
    const dispatch = useDispatch()

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

