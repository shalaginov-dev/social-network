import React, {memo} from "react";
import {Navigate} from "react-router-dom";
import s from './Login.module.scss'

import {LogIn} from "../../state/actions/auth-actions";
import {IFormData, LoginReduxForm} from "./LoginForm";
import {useAppDispatch} from "../../state/hooks";

interface ILoginProps {
    isAuth: boolean
}

export const Login = memo(({isAuth}: ILoginProps) => {
    const dispatch = useAppDispatch()
    const onSubmit = (formData: IFormData) => {
        dispatch(LogIn(formData.email, formData.password, formData.rememberMe))
    }

    return (
        isAuth
            ? <Navigate replace to={'/profile'}/>
            : <div className={s.loginBlock}>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
    )
})