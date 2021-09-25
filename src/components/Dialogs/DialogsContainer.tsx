import {AddMessage, UpdateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";

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