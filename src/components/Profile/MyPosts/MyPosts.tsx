import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";

type PostsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

function MyPosts(props: PostsType) {

    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = (text: string) => {
        props.updateNewPostText(text)
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
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {
                    props.posts.map(p => <Post message={p.message} likesCounter={p.likesCounter}/>)
                }
            </div>
        </div>
    )
}

export default MyPosts

