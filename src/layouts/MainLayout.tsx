import {Outlet} from 'react-router-dom'
import HeaderContainer from "../components/Header/HeaderContainer";
import NavbarContainer from "../components/Nav/NavbarContainer";

export function MainLayout() {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <div className="content">
                <NavbarContainer/>
                <Outlet/>
            </div>
        </div>
    )
}