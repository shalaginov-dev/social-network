import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import s from "./LoginForm.module.css";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
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
                {
                    props.error && <div className={s.formError}>{props.error}</div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)