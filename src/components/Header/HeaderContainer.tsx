import React from 'react'
import {Header} from "./Header"
import {useSelector} from "react-redux"
import {InitialAuthType} from "../../state/reducers/auth-reducer"
import {RootStateType} from "../../state/store"
import {compose} from "redux";
import {auth} from "../../state/selectors";

export const HeaderContainer = () => {
    const {
        isAuth,
        login
    } = useSelector(auth)

    return (
        <div>
            <Header isAuth={isAuth} login={login}/>
        </div>
    )
}

export default compose<React.ComponentType>(
)(HeaderContainer)