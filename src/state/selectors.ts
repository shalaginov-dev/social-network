import {RootStateType} from "./store";
import {InitialUsersType} from "./reducers/users-reducer";
import {InitialAuthType} from "./reducers/auth-reducer";
import {InitialSidebarType} from "./reducers/sidebar-reducer";
import {InitialDialogsType} from "./reducers/dialogs-reducer";
import {InitialProfileType} from "./reducers/profile-reducer";
import {createSelector} from "reselect";

export const usersPage = (state: RootStateType): InitialUsersType => state.usersPage

export const usersPageSelector = createSelector(usersPage, usersPage => usersPage)

export const auth = (state: RootStateType): InitialAuthType => state.auth

export const sidebar = (state: RootStateType): InitialSidebarType => state.sidebar

export const dialogsPage = (state: RootStateType): InitialDialogsType => state.dialogsPage

export const profilePage = (state: RootStateType): InitialProfileType => state.profilePage

