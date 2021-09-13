import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {SetUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

export type ContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}
export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
export type PathParamsType = {
    userId: string
}
export type MapStateToPropsType = {
    profile: ProfileType | null
}
export type MapDispatchPropsType = {
    SetUserProfile: (profile: any) => void
}
export type OwnPropsType = MapStateToPropsType & MapDispatchPropsType
export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        usersAPI.getProfile(userId)
            .then(data => {
                this.props.SetUserProfile(data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {SetUserProfile})(WithUrlDataContainerComponent)

