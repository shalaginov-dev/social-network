import React, {useEffect} from "react";
import {compose} from "redux";
import {Profile} from "./Profile";
import {RouteProps} from "react-router-dom";
import {FetchProfile, FetchStatus} from "../../state/actions/profile-actions";
import {IPathParams, withRouter} from "../../hoc/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {profilePage} from "../../state/selectors";
import {useAppDispatch, useAppSelector} from "../../state/hooks";

type ProfileContainerPropsType = RouteProps & IPathParams

export const ProfileContainer = ({router}: ProfileContainerPropsType) => {
    const {profile, status} = useAppSelector(profilePage)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(FetchProfile(router.params.userId))
        dispatch(FetchStatus(router.params.userId))
    }, [])

    return <Profile profile={profile} status={status}/>


}

export default compose<React.ComponentType>(
    withRouter,
    withAuthRedirect,
)(ProfileContainer)