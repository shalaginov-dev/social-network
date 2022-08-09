import {RootStateType} from "./store";
import {InitialSidebarType} from "./reducers/sidebar-reducer";
import {createSelector} from "reselect";
import {InitialAuthType} from "./types/auth-types";
import {InitialUsersType} from "./types/users-types";
import {InitialDialogsType} from "./types/dialogs-types";
import {InitialProfileType} from "./types/profile-types";

export const usersPage = (state: RootStateType): InitialUsersType => state.usersPage

export const usersPageSelector = createSelector(usersPage, usersPage => usersPage)

export const auth = (state: RootStateType): InitialAuthType => state.auth

export const sidebar = (state: RootStateType): InitialSidebarType => state.sidebar

export const dialogsPage = (state: RootStateType): InitialDialogsType => state.dialogsPage

export const profilePage = (state: RootStateType): InitialProfileType => state.profilePage

