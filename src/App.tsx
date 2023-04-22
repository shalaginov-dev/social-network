import React, {useEffect} from 'react';
import './style/app.scss';
import {Route, Routes, Navigate} from 'react-router-dom'
import NavbarContainer from "./components/Nav/NavbarContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {FetchAuthUserData} from "./state/actions/auth-actions";
import {Preloader} from "./components/common/Preloader/Preloader";
import {auth} from "./state/selectors";
import {useAppDispatch, useAppSelector} from "./state/hooks";
import {MainLayout} from "./layouts/MainLayout";
import {SingleProfile} from "./components/Profile/SingleProfile";


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
    // return !initializationSuccess
    //     ? <Preloader/>
    //     : <div className='app'>
    //         <HeaderContainer/>
    //         <div className="app-wrapper">
    //             <NavbarContainer/>
    //             <div className="app-wrapper-content">
    //                 <Routes>
    //                     <Route path='/login' element={<LoginContainer/>}/>
    //                     <Route path='/dialogs' element={<DialogsContainer/>}/>
    //                     <Route path='/profile' element={<ProfileContainer/>}>
    //                         <Route path='/profile/:userId' element={<ProfileContainer/>}/>
    //                     </Route>
    //                     <Route path='/users' element={<UsersContainer/>}/>
    //                     <Route path='/news' element={<News/>}/>
    //                     <Route path='/music' element={<Music/>}/>
    //                     <Route path='/settings' element={<Settings/>}/>
    //                 </Routes>
    //             </div>
    //         </div>
    //     </div>
}