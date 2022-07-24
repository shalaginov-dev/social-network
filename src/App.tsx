import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import {News} from './components/News';
import {Music} from './components/Music';
import {Settings} from './components/Settings';
import {NavbarContainer} from "./components/Nav/NavbarContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {useDispatch, useSelector} from "react-redux";
import {GetAuthUserData} from "./state/actions/auth-actions";
import {RootStateType} from "./state/store";
import {InitialAuthType} from "./state/reducers/auth-reducer";
import {Preloader} from "./components/common/Preloader/preloader";


export const App: React.FC = () => {
    const auth = useSelector<RootStateType, InitialAuthType>(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetAuthUserData())
    }, [])

    return !auth.initializationSuccess
        ? <Preloader />
        : <div className='app'>
            <HeaderContainer/>
            <div className="app-wrapper">
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/login' element={<LoginContainer/>}/>
                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        <Route path='/profile' element={<ProfileContainer/>}>
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        </Route>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </div>
}