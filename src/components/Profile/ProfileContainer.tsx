import React, {memo, useEffect} from "react";
import {compose} from "redux";
import {Profile} from "./Profile";
import {FetchProfile, FetchStatus} from "../../redux/actions/profile-actions";
import {withRouter} from "../../hoc/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {profilePage} from "../../redux/selectors";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {Preloader} from "../common/Preloader/Preloader";


export const ProfileContainer = memo(() => {
    const {profile, status, posts} = useAppSelector(profilePage)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(FetchProfile())
        dispatch(FetchStatus())
    }, [])


    return !profile
        ? <Preloader/>
        : <Profile profile={profile} posts={posts} status={status} isOwn={true}/>


})

export default compose<React.ComponentType>(
    withRouter,
    withAuthRedirect,
)(ProfileContainer)