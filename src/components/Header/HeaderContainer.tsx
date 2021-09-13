import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AuthType, SetAuthUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";

export type HeaderContainerPropsType = {
    SetAuthUserData: (data: AuthType) => void
    isAuth: boolean
    login: string | null
}

export class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        usersAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.SetAuthUserData(data.data)
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