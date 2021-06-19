import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionsType, PostType, StateProfileType, StoreType} from "../../../redux/state";
import {addPostAC, updateNewTextAC} from "../../../redux/profile-reducer";
import MyPost from './MyPosts'

type ContainerPostsType = {
    store: StoreType
}

function MyPostsContainer(props: ContainerPostsType) {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostAC(props.store.getState().profilePage.newPostText))
    }
    let onPostChange = (text: string) => {
        props.store.dispatch(updateNewTextAC(text))
    }

    return (
        <MyPost
            post={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            addPost={addPost}
            updateNewPostText={onPostChange}
        />
    )
}

export default MyPostsContainer

