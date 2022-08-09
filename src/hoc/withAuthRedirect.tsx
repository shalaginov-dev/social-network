import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {auth} from "../state/selectors";
import {useAppSelector} from "../state/hooks";

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: T) {
        const {
            isAuth
        } = useAppSelector(auth)

        return !isAuth
            ? <Navigate replace to={'/login'}/>
            : <Component {...props as T}/>
    }

    return RedirectComponent
}