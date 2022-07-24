import React from "react";
import { useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {InitialDialogsType} from "../../state/reducers/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export const DialogsContainer = () => {
    const dialogsPage = useSelector<RootStateType, InitialDialogsType>(state => state.dialogsPage)

    return (
        <Dialogs dialogs={dialogsPage.dialogs} messages={dialogsPage.messages}  />
    )
}

export default compose<React.ComponentType>(
    withAuthRedirect,
)(DialogsContainer)