import { PostType } from "../../../state/reducers/profile-reducer";
import {connect} from "react-redux";
import {StateType} from "../../../state/store";
import MyPosts from "./MyPosts";
import {AddPost} from "../../../state/actions/profile-actions";

type MapStatePropsType = {
    posts: Array<PostType>
}

let mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    AddPost,
})(MyPosts)



