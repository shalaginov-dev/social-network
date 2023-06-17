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
        <div className={s.loginWrapper}>
            <div className={s.loginBlock}>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
                <p style={{marginTop: '20px', opacity: '50%'}}>test account:</p>
                <p>fatflycat@gmail.com</p>
                <p> qwe123qwe</p>
            </div>
        </div>
    )
})