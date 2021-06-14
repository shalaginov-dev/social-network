import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionsType, PostType} from "../../../redux/state";
import { addPostAC, updateNewTextAC } from "../../../redux/profile-reducer";

type PostsType = {
    post: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

function MyPosts(props: PostsType) {

    let addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    }
    let onPostChange = (value: string) => {
        props.dispatch(updateNewTextAC(value))
    }

    return (
        <div className={s.postsBlock}>
            <h3>
                my post
            </h3>
            <div>
                <div>
                    <textarea value={props.newPostText}
                              onChange={(e) => {
                                  onPostChange(e.currentTarget.value)
                              }}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {
                    props.post.map(p => <Post message={p.message} likesCounter={p.likesCounter}/>)
                }
            </div>
        </div>
    )
}

export default MyPosts

