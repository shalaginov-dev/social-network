import React from "react";
import {Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {LogIn} from "../../state/actions/auth-actions";
import {FormDataType, LoginReduxForm} from "./LoginForm";

type LoginPropsType = {
    isAuth: boolean
}

export const Login = (props: LoginPropsType) => {
    const dispatch = useDispatch()
    const onSubmit = (formData: FormDataType) => {
        dispatch(LogIn(formData.email, formData.password, formData.rememberMe))
    }

    return (
        props.isAuth
            ? <Navigate replace to={'/profile'}/>
            : <div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
    )
}