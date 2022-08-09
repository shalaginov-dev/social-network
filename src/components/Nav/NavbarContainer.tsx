import {compose} from "redux";
import React from "react";
import {Navbar} from "./Navbar";
import {dialogsPage, sidebar} from "../../state/selectors";
import {useAppSelector} from "../../state/hooks";

const NavbarContainer =()=> {
    const {
        navigation
    } = useAppSelector(sidebar)
    const {
        dialogs
    } = useAppSelector(dialogsPage)


    return(
        <Navbar navigation={navigation} dialogs={dialogs}/>
    )
}
export default compose<React.ComponentType>(
)(NavbarContainer)