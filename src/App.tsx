import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom'
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';
import {ActionsType, StateType, StoreType} from './redux/state';

export type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsType) => void
}


const App: React.FC<AppPropsType> = (props: AppPropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.navbarPage} dialogs={props.state.dialogsPage.dialogs}/>
            <div className="app-wrapper-content">


                <Route path='/dialogs' render={() => <Dialogs
                    dialogsPage={props.state.dialogsPage}
                    dispatch={props.dispatch.bind(props.state)} />}/>

                <Route path='/profile' render={() => <Profile
                    dispatch={props.dispatch.bind(props.state)}
                    profilePage={props.state.profilePage} />}/>


                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>

        </div>
    );
}

export default App;
