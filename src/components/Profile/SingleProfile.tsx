import React, {memo, useEffect} from "react";
import {compose} from "redux";
import {Profile} from "./Profile";
import {useParams} from "react-router-dom";
import {FetchProfile, FetchStatus} from "../../redux/actions/profile-actions";
import {withRouter} from "../../hoc/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {profilePage} from "../../redux/selectors";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {Preloader} from "../common/Preloader/Preloader";


export const SingleProfile = memo(() => {
    const {profile, status, posts} = useAppSelector(profilePage)
    const dispatch = useAppDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(FetchProfile(id))
        dispatch(FetchStatus(id))
    }, [])


    return !profile
        ? <Preloader/>
        : <Profile profile={profile} posts={posts} status={status} isOwn={!id}/>


})

export default compose<React.ComponentType>(
    withRouter,
    withAuthRedirect,
)(SingleProfile)