import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
export type AddMessageFormDataType = {
    newMessage: string
}
export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component='textarea' placeholder='Enter your message' name='newMessage' />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

export const AddMessageReduxForm = reduxForm<AddMessageFormDataType>({form: 'addMessageForm'})(AddMessageForm)
