import React from 'react'
import {Header} from "./Header"
import {compose} from "redux";
import {auth} from "../../state/selectors";
import {useAppSelector} from "../../state/hooks";

const HeaderContainer = () => {
    const {isAuth, login} = useAppSelector(auth)
    const photo = useAppSelector(state => state.profilePage.profile?.photos.small)

    return (
        <div>
            <Header isAuth={isAuth} photo={photo}/>
        </div>
    )
}

export default compose<React.ComponentType>()(HeaderContainer)