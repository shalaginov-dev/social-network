import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea,} from "../../../common/FormsControls/FormsControls";

export interface IAboutMeFormProps {
    fullName: string
    aboutMe: string
    lookingForAJobDescription: string
    lookingForAJob: boolean
}

const AboutMeForm: React.FC<InjectedFormProps<IAboutMeFormProps>> = ({handleSubmit}) => {


    return (
        <form onSubmit={handleSubmit}>
            <button>save</button>
            <div>
                <b>Full name: </b>
                <div>
                    <Field
                        component={Input}
                        validate={[]}
                        placeholder='Full name'
                        name='fullName'
                    />
                </div>
            </div>
            <div>
                <b>Looking for a job: </b>
                <div>
                    <Field
                        component={Input}
                        validate={[]}
                        placeholder=''
                        name='lookingForAJob'
                        type={'checkbox'}
                    />
                </div>
            </div>
            <div>
                <b>Skills: </b>
                <div>
                    <Field
                        component={Textarea}
                        validate={[]}
                        placeholder='Skills'
                        name='lookingForAJobDescription'
                    />
                </div>
            </div>
            <div>
                <b>About me: </b>
                <div>
                    <Field
                        component={Textarea}
                        validate={[]}
                        placeholder='About me'
                        name='aboutMe'
                    />
                </div>
            </div>
            {/*<div>*/}
            {/*    <b>Contacts: </b>{Object.keys(profile.contacts)*/}
            {/*    // @ts-ignore*/}
            {/*    .map(key => <Contact key={key} contactTitle={key} link={profile ? profile.contacts[key] : null}/>)}*/}
            {/*</div>*/}
        </form>
    )
}

export const AboutMeEditForm = reduxForm<IAboutMeFormProps>({form: 'aboutMeForm'})(AboutMeForm)
