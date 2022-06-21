import React from "react";
import { useSelector} from "react-redux";
import {StateType} from "../../state/store";
import {InitialDialogsType} from "../../state/reducers/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export const DialogsContainer = () => {
    const dialogsPage = useSelector<StateType, InitialDialogsType>(state => state.dialogsPage)
    //разбить dialogsPage на переменные

    return (
        <Dialogs dialogsPage={dialogsPage}  />
    )
}

export default compose<React.ComponentType>(
    withAuthRedirect,
)(DialogsContainer)