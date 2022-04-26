import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../state/reducers/profile-reducer";

type PostsType = {
    newPostText: string
    posts: Array<PostType>
    AddPost: () => void
    UpdateNewPostText: (text: string) => void
}

function MyPosts(props: PostsType) {

    return (
        <div className={s.postsBlock}>
            <h3>
                my post
            </h3>
            <div>
                <div>
                    <textarea value={props.newPostText}
                              onChange={(e) => {
                                  props.UpdateNewPostText(e.currentTarget.value)
                              }}/>
                </div>
                <div>
                    <button onClick={() => {props.AddPost()}}>Add Post</button>
                </div>
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

