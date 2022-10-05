import React from "react";
import {Dialogs} from "./Dialogs";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {dialogsPage} from "../../state/selectors";
import {useAppSelector} from "../../state/hooks";

export const DialogsContainer = () => {
    const {dialogs, messages} = useAppSelector(dialogsPage)

    return (
        <Dialogs dialogs={dialogs} messages={messages}/>
    )
}

export default compose<React.ComponentType>(
    withAuthRedirect,
)(DialogsContainer)