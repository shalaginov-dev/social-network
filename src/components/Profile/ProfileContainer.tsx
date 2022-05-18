import React from "react";
import {compose} from "redux";
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../state/store";
import {RouteProps} from "react-router-dom";
import {GetProfile, GetStatus, UpdateStatus} from "../../state/actions/profile-actions";
import {PathParamsType, withRouter} from "../../hoc/withRouter";
import {ProfileType} from "../../state/reducers/profile-reducer";

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

export type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth?: boolean
    status: string
}
export type MapDispatchPropsType = {
    GetProfile: (userId: string) => void
    GetStatus: (userId: string) => void
    UpdateStatus: (status: string) => void
}
export type OwnPropsType = MapStateToPropsType & MapDispatchPropsType
export type ProfileContainerPropsType = RouteProps & OwnPropsType & PathParamsType


export class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        this.props.GetProfile(this.props.router.params.userId)
        this.props.GetStatus(this.props.router.params.userId)
    }

    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {GetProfile, GetStatus, UpdateStatus}),
    withRouter,
)(ProfileContainer)