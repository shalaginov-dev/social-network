import React from "react";
import {compose} from "redux";
import {useSelector} from "react-redux";
import {Login} from "./Login";
import {RootStateType} from "../../state/store";
import {InitialAuthType} from "../../state/reducers/auth-reducer";

export const LoginContainer = () => {
    const auth = useSelector<RootStateType, InitialAuthType>(state => state.auth)
    return (
        <Login isAuth={auth.isAuth}/>
    )
}

export default compose<React.ComponentType>(
)(LoginContainer)