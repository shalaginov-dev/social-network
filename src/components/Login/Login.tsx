import React from "react";
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {LogIn} from "../../state/actions/auth-actions";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

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

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        component={Input}
                        placeholder='Email'
                        name='email'
                        validate={[requiredField]}
                    />
                </div>
                <div>
                    <Field
                        component={Input}
                        placeholder='Password'
                        name='password'
                        type='password'
                        validate={[requiredField]}
                    />
                </div>
                <div className={s.remember}>
                    <Field
                        component={Input}
                        type='checkbox'
                        name='rememberMe'
                    /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)