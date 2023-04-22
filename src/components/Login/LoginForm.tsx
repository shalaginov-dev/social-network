import React, {memo} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import s from "./LoginForm.module.scss";

export interface IFormData {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<IFormData>> = memo(({error, handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                    error && <div className={s.formError}>{error}</div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
})

export const LoginReduxForm = reduxForm<IFormData>({form: 'login'})(LoginForm)