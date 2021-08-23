import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthType, SetAuthUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";

export type HeaderContainerPropsType = {
    SetAuthUserData: (data: AuthType) => void
    isAuth: boolean
    login: string | null
}

export class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.SetAuthUserData(response.data.data)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {SetAuthUserData})(HeaderContainer)