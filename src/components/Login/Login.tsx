import React from "react";
import s from './Login.module.css'

export const Login = () => {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm/>
        </div>
    )
}
export const LoginForm = () => {
    return (
        <div>
            <form>
                <div>
                    <input placeholder='Login'/>
                </div>
                <div>
                    <input placeholder='Password'/>
                </div>
                <div className={s.remember}>
                    <input type='checkbox'/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}