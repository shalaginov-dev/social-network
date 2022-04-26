import {ACTIONS_TYPE} from "./auth-actions";
import {ProfileType} from "../../components/Profile/ProfileContainer";
import {usersAPI} from "../../api/api";

export type AddPostAT = {
    type: ACTIONS_TYPE.ADD_POST
}
export type UpdateNewTextAT = {
    type: ACTIONS_TYPE.UPDATE_NEW_POST_TEXT
    payload: { newText: string }
}
export type SetUserProfileAT = {
    type: ACTIONS_TYPE.SET_USER_PROFILE
    payload: { profile: ProfileType }
}

export type ProfileActionsType = AddPostAT | UpdateNewTextAT | SetUserProfileAT

export const AddPost = (): AddPostAT => ({
    type: ACTIONS_TYPE.ADD_POST,
})
export const UpdateNewPostText = (newText: string): UpdateNewTextAT => ({
    type: ACTIONS_TYPE.UPDATE_NEW_POST_TEXT,
    payload: {newText},
})
export const SetUserProfile = (profile: ProfileType): SetUserProfileAT => ({
    type: ACTIONS_TYPE.SET_USER_PROFILE,
    payload: {profile},
})

export const GetProfile = (userId: string = '2') => {
    return (dispatch: any) => {
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(SetUserProfile(data))
            })
    }
}
