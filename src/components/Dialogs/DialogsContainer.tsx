import Dialogs from "./Dialogs";
import {StateType} from "../../state/store";
import {connect} from "react-redux";
import {AddMessage, UpdateNewMessageText} from "../../state/actions/dialogs-actions";

const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

export const DialogsContainer = connect(mapStateToProps, {
    UpdateNewMessageText,
    AddMessage,
})(Dialogs)