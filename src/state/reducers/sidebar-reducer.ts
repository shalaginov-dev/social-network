import {v1} from "uuid"

export interface INavigation {
    id: string
    to: string
    title: string
}

export interface IInitialSidebar {
    navigation: INavigation[]
}

let initialState: IInitialSidebar = {
    navigation: [
        {id: v1(), to: '/', title: 'Profile'},
        {id: v1(), to: '/dialogs', title: 'Messages'},
        {id: v1(), to: '/users', title: 'Users'},
        {id: v1(), to: '/', title: 'News'},
        {id: v1(), to: '/', title: 'Music'},
        {id: v1(), to: '/', title: 'Settings'},
    ]
}

export const sidebarReducer = (state: IInitialSidebar = initialState, action: any): IInitialSidebar => {

    return state
}