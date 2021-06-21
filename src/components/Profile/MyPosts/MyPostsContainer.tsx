import {addPostAC, PostType, updateNewTextAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import {Dispatch} from 'redux'

type MapStatePropsType = {
    newPostText: string
    posts: Array<PostType>
}

let mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewTextAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



