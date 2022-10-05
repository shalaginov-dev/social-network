import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLength, requiredField} from "../../utils/validators/validators";

export interface IAddMessageFormData {
    newDialogsMessage: string
}

const maxLength10 = maxLength(10)


export const AddMessageForm: React.FC<InjectedFormProps<IAddMessageFormData>> = ({handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
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

export const AddMessageReduxForm = reduxForm<IAddMessageFormData>({form: 'addMessageForm'})(AddMessageForm)
