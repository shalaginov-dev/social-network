import { v1 } from "uuid"
import {ActionsType, StateNavbarType } from "./state"

let initialState: StateNavbarType = {
    navigation: [
        {id: v1(), to: '/profile', title: 'Profile'},
        {id: v1(), to: '/dialogs', title: 'Messages'},
        {id: v1(), to: '/news', title: 'News'},
        {id: v1(), to: '/music', title: 'Music'},
        {id: v1(), to: '/settings', title: 'Settings'},
    ]
}

export const navbarReducer = (state: StateNavbarType = initialState, action: ActionsType) => {


    return state
}