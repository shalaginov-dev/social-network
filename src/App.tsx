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
import DialogsContainer from './components/Dialogs/DialogsContainer';

export type AppPropsType = {
    store: StoreType
}


const App: React.FC<AppPropsType> = (props: AppPropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar store={props.store} />
            <div className="app-wrapper-content">


                <Route path='/dialogs' render={() => <DialogsContainer
                    store={props.store}
                />}/>

                <Route path='/profile' render={() => <Profile
                    store={props.store}
                />}/>


                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>

        </div>
    );
}

export default App;
