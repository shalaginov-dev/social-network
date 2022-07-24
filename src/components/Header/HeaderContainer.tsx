import React from 'react'
import {Header} from "./Header"
import {useSelector} from "react-redux"
import {InitialAuthType} from "../../state/reducers/auth-reducer"
import {RootStateType} from "../../state/store"
import {compose} from "redux";

export const HeaderContainer = () => {
    const auth = useSelector<RootStateType, InitialAuthType>(state => state.auth)

    return (
        <div>
            <Header isAuth={auth.isAuth} login={auth.login}/>
        </div>
    )
}

export default compose<React.ComponentType>(
)(HeaderContainer)