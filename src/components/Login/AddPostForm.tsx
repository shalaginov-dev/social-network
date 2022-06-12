import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddPostFormDataType = {
    newPostMessage: string
}
export const AddPostForm: React.FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component='textarea' placeholder='Enter your message' name='newPostMessage' />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

export const AddPostReduxForm = reduxForm<AddPostFormDataType>({form: 'addPostForm'})(AddPostForm)
