import {combineReducers, createStore} from 'redux'
import {profileReducer} from './profile-reducer'
import {dialogsReducer} from './dialogs-reducer'
import {navbarReducer} from './navbar-reducer'
import { StoreType } from './state'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer
})

export let store: StoreType = createStore(reducers)