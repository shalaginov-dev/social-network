import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootStateType} from "../state/store";
import {InitialAuthType} from "../state/reducers/auth-reducer";

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: T) {
        const auth = useSelector<RootStateType, InitialAuthType>(state => state.auth)

        return !auth.isAuth
            ? <Navigate replace to={'/login'}/>
            : <Component {...props as T}/>
    }

    return RedirectComponent
}