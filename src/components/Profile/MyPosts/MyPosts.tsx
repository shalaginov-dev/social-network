import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../state/reducers/profile-reducer";
import {AddPostFormDataType, AddPostReduxForm} from "../../Login/AddPostForm";
import {AddMessageFormDataType} from "../../Login/AddMessageForm";

type PostsType = {
    posts: Array<PostType>
    AddPost: (newText: string) => void
}

function MyPosts(props: PostsType) {
    const onSubmit = (formData: AddPostFormDataType) => {
        props.AddPost(formData.newPostMessage)
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

export default MyPosts

