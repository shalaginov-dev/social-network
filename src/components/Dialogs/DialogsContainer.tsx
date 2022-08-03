import React from "react";
import {useSelector} from "react-redux";
import {Dialogs} from "./Dialogs";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {dialogsPage} from "../../state/selectors";

export const DialogsContainer = () => {
    const {
        dialogs,
        messages
    } = useSelector(dialogsPage)

    return (
        <Dialogs dialogs={dialogs} messages={messages}/>
    )
}

export default compose<React.ComponentType>(
    withAuthRedirect,
)(DialogsContainer)