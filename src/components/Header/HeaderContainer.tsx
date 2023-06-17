import React from 'react'
import {Header} from "./Header"
import {compose} from "redux";
import {auth} from "../../redux/selectors";
import {useAppSelector} from "../../redux/hooks";

const HeaderContainer = () => {
    const {isAuth, login} = useAppSelector(auth)
    const photo = useAppSelector(state => state.profilePage.profile?.photos.small)

    return (
            <Header isAuth={isAuth} photo={photo}/>
    )
}

export default compose<React.ComponentType>()(HeaderContainer)