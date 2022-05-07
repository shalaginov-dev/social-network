import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {StateType} from "../state/store";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent( props: MapStateToPropsType) {
        let {isAuth, ...restProps} = props
        return !isAuth
            ? <Navigate replace to={'/login'}/>
            : <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}