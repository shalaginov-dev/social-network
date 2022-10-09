import React, {memo} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

export interface IAddPostFormData {
    newPostMessage: string
}

const maxLength10 = maxLength(10)

export const AddPostForm: React.FC<InjectedFormProps<IAddPostFormData>> = memo(({handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        component={Textarea}
                        placeholder='Enter your text'
                        name='newPostMessage'
                        validate={[requiredField, maxLength10]
                        }/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
})

export const AddPostReduxForm = reduxForm<IAddPostFormData>({form: 'addPostForm'})(AddPostForm)
