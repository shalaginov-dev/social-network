import {RootStateType} from "./store";
import {IInitialSidebar} from "./reducers/sidebar-reducer";
import {createSelector} from "reselect";
import {IInitialAuth} from "./types/auth-types";
import {IInitialUsers} from "./types/users-types";
import {IInitialDialogs} from "./types/dialogs-types";
import {IInitialProfile} from "./types/profile-types";

export const usersPage = (state: RootStateType): IInitialUsers => state.usersPage

export const usersPageSelector = createSelector(usersPage, usersPage => usersPage)

export const auth = (state: RootStateType): IInitialAuth => state.auth

export const sidebar = (state: RootStateType): IInitialSidebar => state.sidebar

export const dialogsPage = (state: RootStateType): IInitialDialogs => state.dialogsPage

export const profilePage = (state: RootStateType): IInitialProfile => state.profilePage

