import { v1 } from "uuid"

export type NavigationType = {
    id: string
    to: string
    title: string
}
export type InitialSidebarType = {
    navigation: Array<NavigationType>
}

let initialState: InitialSidebarType = {
    navigation: [
        {id: v1(), to: '/profile', title: 'Profile'},
        {id: v1(), to: '/dialogs', title: 'Messages'},
        {id: v1(), to: '/news', title: 'News'},
        {id: v1(), to: '/music', title: 'Music'},
        {id: v1(), to: '/settings', title: 'Settings'},
    ]
}

export const sidebarReducer = (state: InitialSidebarType = initialState, action: any): InitialSidebarType => {

    return state
}