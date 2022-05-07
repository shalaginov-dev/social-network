import React from "react";
import {compose} from "redux";
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../state/store";
import {RouteProps} from "react-router-dom";
import {GetProfile} from "../../state/actions/profile-actions";
import {PathParamsType, withRouter} from "../../hoc/withRouter";

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

export type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth?: boolean
}
export type MapDispatchPropsType = {
    GetProfile: (userId: string) => void
}
export type OwnPropsType = MapStateToPropsType & MapDispatchPropsType
export type ProfileContainerPropsType = RouteProps & OwnPropsType & PathParamsType


export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        this.props.GetProfile(this.props.router.params.userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {GetProfile,}),
    withRouter,
)(ProfileContainer)