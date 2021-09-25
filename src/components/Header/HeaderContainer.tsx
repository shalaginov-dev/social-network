import React from 'react'
import Header from "./Header"
import {connect} from "react-redux"
import {AuthType, GetAuthUserData, SetAuthUserData} from "../../redux/auth-reducer"
import {StateType} from "../../redux/redux-store"

export type HeaderContainerPropsType = {
    isAuth: boolean
    login: string | null
    SetAuthUserData: (data: AuthType) => void
    GetAuthUserData: () => void
}

export class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.GetAuthUserData()
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

export default connect(mapStateToProps, {
    SetAuthUserData,
    GetAuthUserData,
})(HeaderContainer)