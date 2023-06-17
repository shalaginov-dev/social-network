import React, {memo} from "react";
import s from './Login.module.scss'

import {LogIn} from "../../redux/actions/auth-actions";
import {IFormData, LoginReduxForm} from "./LoginForm";
import {useAppDispatch} from "../../redux/hooks";

interface ILoginProps {
    isAuth: boolean
}

export const Login = memo(({isAuth}: ILoginProps) => {
    const dispatch = useAppDispatch()
    const onSubmit = (formData: IFormData) => {
        dispatch(LogIn(formData.email, formData.password, formData.rememberMe))
    }

    return (
        <div className={s.loginBlock}>
            <div className={s.loginWrapper}>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
})