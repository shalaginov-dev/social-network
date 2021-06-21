import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
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
            dispatch(updateNewMessageTextAC(newMessage))
        },
        addMessage: (newMessageText: string) => {
            dispatch(addMessageAC(newMessageText))
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)