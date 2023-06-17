import React from "react";
import {compose} from "redux";
import {Login} from "./Login";
import {auth} from "../../redux/selectors";
import {useAppSelector} from "../../redux/hooks";

export const LoginContainer = () => {
    const {isAuth} = useAppSelector(auth)

    return (
        <Login isAuth={isAuth}/>
    )
}

export default compose<React.ComponentType>()(LoginContainer)