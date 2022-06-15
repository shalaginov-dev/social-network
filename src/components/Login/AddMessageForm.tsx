import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLength, requiredField} from "../../utils/validators/validators";

export type AddMessageFormDataType = {
    newDialogsMessage: string
}
const maxLength10 = maxLength(10)


export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        component={Textarea}
                        validate={[requiredField, maxLength10]}
                        placeholder='Enter your message'
                        name='newDialogsMessage'
                    />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

export const AddMessageReduxForm = reduxForm<AddMessageFormDataType>({form: 'addMessageForm'})(AddMessageForm)
