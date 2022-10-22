import React, {memo, useEffect} from "react";
import {compose} from "redux";
import {Profile} from "./Profile";
import {RouteProps} from "react-router-dom";
import {FetchProfile, FetchStatus} from "../../state/actions/profile-actions";
import {IPathParams, withRouter} from "../../hoc/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {profilePage} from "../../state/selectors";
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {Preloader} from "../common/Preloader/Preloader";

type ProfileContainerPropsType = RouteProps & IPathParams

export const ProfileContainer = memo(({router}: ProfileContainerPropsType) => {
    const {profile, status, posts} = useAppSelector(profilePage)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(FetchProfile(router.params.userId))
        dispatch(FetchStatus(router.params.userId))
    }, [router.params.userId])


    return !profile
        ? <Preloader/>
        : <Profile profile={profile} posts={posts} status={status} isOwn={!router.params.userId}/>


})

export default compose<React.ComponentType>(
    withRouter,
    withAuthRedirect,
)(ProfileContainer)