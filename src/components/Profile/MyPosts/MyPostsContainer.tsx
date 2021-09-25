import {AddPost, PostType, UpdateNewPostText} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

type MapStatePropsType = {
    newPostText: string
    posts: Array<PostType>
}

let mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    AddPost,
    UpdateNewPostText,
})(MyPosts)



