import React, {useEffect} from 'react'
import {Header} from "./Header"
import {useDispatch, useSelector} from "react-redux"
import {InitialAuthType} from "../../state/reducers/auth-reducer"
import {StateType} from "../../state/store"
import {GetAuthUserData} from "../../state/actions/auth-actions";
import {compose} from "redux";

export const HeaderContainer = () => {
    const auth = useSelector<StateType, InitialAuthType>(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetAuthUserData())
    }, [])

    return (
        <div>
            <Header isAuth={auth.isAuth} login={auth.login}/>
        </div>
    )
}

export default compose<React.ComponentType>(
)(HeaderContainer)