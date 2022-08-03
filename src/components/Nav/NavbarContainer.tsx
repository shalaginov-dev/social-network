import {compose} from "redux";
import React from "react";
import {Navbar} from "./Navbar";
import {useSelector} from "react-redux";
import {dialogsPage, sidebar} from "../../state/selectors";

export const NavbarContainer =()=> {

    const {
        navigation
    } = useSelector(sidebar)

    const {
        dialogs
    } = useSelector(dialogsPage)

    return(
        <Navbar navigation={navigation} dialogs={dialogs}/>
    )
}
export default compose<React.ComponentType>(
)(NavbarContainer)