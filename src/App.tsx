import React, {useEffect} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import './scss/app.scss';

import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {FetchAuthUserData} from "./redux/actions/auth-actions";
import {Preloader} from "./components/common/Preloader/Preloader";
import {auth} from "./redux/selectors";
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {SingleProfile} from "./components/Profile/SingleProfile";
import {MainLayout} from "./layouts/MainLayout";


export const App = () => {
    const {initializationSuccess, isAuth} = useAppSelector(auth)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(FetchAuthUserData())
    }, [])

    return (
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route path="" element={isAuth ? <ProfileContainer/> : <Navigate to="/login" replace/>}/>
                <Route path="login" element={!isAuth ? <LoginContainer/> : <Navigate to="/" replace/>}/>
                <Route path="dialogs" element={isAuth ? <DialogsContainer/> : <Navigate to="/login" replace/>}/>
                <Route path="profile/:id" element={isAuth ? <SingleProfile/> : <Navigate to="/login" replace/>}/>
                <Route path="users" element={isAuth ? <UsersContainer/> : <Navigate to="/login" replace/>}/>
            </Route>
        </Routes>
    )
}