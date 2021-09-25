import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {GetProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import axios from "axios";

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
    isAuth: boolean
}
export type MapDispatchPropsType = {
    GetProfile: (userId: string) => void
}
export type OwnPropsType = MapStateToPropsType & MapDispatchPropsType
export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                console.log(response)
                console.log(response.data)
            })
        this.props.GetProfile(this.props.match.params.userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'} />

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    GetProfile,
})(WithUrlDataContainerComponent)

