import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {NavbarContainer} from "./components/Nav/Navbar";
import {Route} from 'react-router-dom'
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";


const App: React.FC = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <NavbarContainer/>
            <div className="app-wrapper-content">

                <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

                <Route path='/users' render={() => <UsersContainer/>}/>

                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>

        </div>
    );
}

export default App;
