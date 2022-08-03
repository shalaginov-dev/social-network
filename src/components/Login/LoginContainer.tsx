import React from "react";
import {compose} from "redux";
import {useSelector} from "react-redux";
import {Login} from "./Login";
import {RootStateType} from "../../state/store";
import {InitialAuthType} from "../../state/reducers/auth-reducer";
import {auth} from "../../state/selectors";

export const LoginContainer = () => {

    const {
        isAuth
    } = useSelector(auth)

    return (
        <Login isAuth={isAuth}/>
    )
}

export default compose<React.ComponentType>(
)(LoginContainer)