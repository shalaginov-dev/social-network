import React from "react";
import {compose} from "redux";
import {Login} from "./Login";
import {auth} from "../../state/selectors";
import {useAppSelector} from "../../state/hooks/hooks";

export const LoginContainer = () => {

    const {
        isAuth
    } = useAppSelector(auth)

    return (
        <Login isAuth={isAuth}/>
    )
}

export default compose<React.ComponentType>(
)(LoginContainer)