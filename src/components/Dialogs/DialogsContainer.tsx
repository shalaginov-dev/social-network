import {StateType} from "../../state/store";
import {connect} from "react-redux";
import {AddMessage, UpdateNewMessageText} from "../../state/actions/dialogs-actions";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";
import Dialogs from "./Dialogs";

const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {UpdateNewMessageText, AddMessage,}),
    withAuthRedirect,
)(Dialogs)