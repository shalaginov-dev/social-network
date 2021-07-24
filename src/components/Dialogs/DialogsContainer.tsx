import {AddMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StateType} from "../../redux/redux-store";
import {connect} from "react-redux";


const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        onSendMessageClick: (newMessage: string) => {
            dispatch(UpdateNewMessageTextAC(newMessage))
        },
        addMessage: (newMessageText: string) => {
            dispatch(AddMessageAC(newMessageText))
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)