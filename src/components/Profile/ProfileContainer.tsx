import React, {useEffect} from "react";
import {compose} from "redux";
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {RouteProps} from "react-router-dom";
import {GetProfile, GetStatus} from "../../state/actions/profile-actions";
import {PathParamsType, withRouter} from "../../hoc/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {profilePage} from "../../state/selectors";

export type ProfileContainerPropsType = RouteProps & PathParamsType

export const ProfileContainer = (props: ProfileContainerPropsType) => {

    const {
        profile,
        status
    } = useSelector(profilePage)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetProfile(props.router.params.userId))
        dispatch(GetStatus(props.router.params.userId))
    }, [])

    return <Profile profile={profile} status={status}/>


}

export default compose<React.ComponentType>(
    withRouter,
    withAuthRedirect,
)(ProfileContainer)