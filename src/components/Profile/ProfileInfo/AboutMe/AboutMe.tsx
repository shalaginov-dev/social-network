import s from "../ProfileInfo.module.scss";
import {Contact} from "./Contact";
import React from "react";
import {MyProfile} from "../../../../state/types/profile-types";

interface IAboutMeProps {
    profile: MyProfile | null
    isOwn: boolean
    toggleEditMode: () => void
}

export const AboutMe = ({profile, isOwn, toggleEditMode}: IAboutMeProps) => {
    return profile ?
        <div className={s.infoBlock}>
            {/*{isOwn && <button onClick={toggleEditMode}>edit</button>}*/}
            <div>{profile.fullName}</div>
            <div><b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}</div>
            <div><b>Skills: </b>{profile.lookingForAJobDescription}</div>
            <div><b>About me: </b>{profile.aboutMe}</div>
            <div>
                {profile.contacts['github']}
            </div>
        </div> : null

}