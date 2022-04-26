import { PostType } from "../../../state/reducers/profile-reducer";
import {connect} from "react-redux";
import {StateType} from "../../../state/store";
import MyPosts from "./MyPosts";
import {AddPost, UpdateNewPostText} from "../../../state/actions/profile-actions";

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



