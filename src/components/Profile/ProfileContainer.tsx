import React, {useEffect} from "react";
import {compose} from "redux";
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../state/store";
import {RouteProps} from "react-router-dom";
import {GetProfile, GetStatus} from "../../state/actions/profile-actions";
import {PathParamsType, withRouter} from "../../hoc/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {InitialProfileType} from "../../state/reducers/profile-reducer";

export type ProfileContainerPropsType = RouteProps & PathParamsType

export const ProfileContainer = (props: ProfileContainerPropsType) => {
    const profilePage = useSelector<StateType, InitialProfileType>(state => state.profilePage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetProfile(props.router.params.userId))
        dispatch(GetStatus(props.router.params.userId))
    }, [])

    return <Profile profile={profilePage.profile} status={profilePage.status}/>
}

export default compose<React.ComponentType>(
    withRouter,
    withAuthRedirect,
)(ProfileContainer)