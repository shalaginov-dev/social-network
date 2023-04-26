import {compose} from "redux";
import React from "react";
import {Navbar} from "./Navbar";
import {dialogsPage, sidebar} from "../../state/selectors";
import {useAppSelector} from "../../state/hooks";
import {useLocation} from "react-router-dom";

const NavbarContainer = () => {
    const {navigation} = useAppSelector(sidebar)
    const {dialogs} = useAppSelector(dialogsPage)
    const location = useLocation()

    return (
        location.pathname !== '/login' && <Navbar navigation={navigation} dialogs={dialogs}/>
    )
}
export default compose<React.ComponentType>()(NavbarContainer)