import {compose} from "redux";
import React from "react";
import {Navbar} from "./Navbar";
import {useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {InitialSidebarType} from "../../state/reducers/sidebar-reducer";
import {InitialDialogsType} from "../../state/reducers/dialogs-reducer";

export const NavbarContainer =()=> {
    const sidebar = useSelector<RootStateType, InitialSidebarType>(state => state.sidebar)
    const dialogsPage = useSelector<RootStateType, InitialDialogsType>(state => state.dialogsPage)

    return(
        <Navbar navigation={sidebar.navigation} dialogs={dialogsPage.dialogs}/>
    )
}
export default compose<React.ComponentType>(
)(NavbarContainer)