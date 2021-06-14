import {v1} from "uuid";
import { addMessageAC, dialogsReducer, updateNewMessageTextAC } from "./dialogs-reducer";
import { navbarReducer } from "./navbar-reducer";
import { addPostAC, profileReducer, updateNewTextAC } from "./profile-reducer";

export type NavigationType = {
    id: string
    to: string
    title: string
}
export type DialogType = {
    id: string
    name: string
    img: string
}
export type MessageType = {
    id: string
    message: string
}
export type PostType = {
    id: string
    message: string
    likesCounter: number
}
export type StateProfileType = {
    posts: Array<PostType>
    newPostText: string
}
export type StateDialogsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type StateNavbarType = {
    navigation: Array<NavigationType>
}
export type StateType = {
    profilePage: StateProfileType
    dialogsPage: StateDialogsType
    navbarPage: StateNavbarType
}
export type StoreType = {
    _state: StateType
    _callback: (_state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}
export type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewTextAC> | ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageTextAC>





const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCounter: 2},
                {id: v1(), message: "It's my  first post", likesCounter: 5},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {
                    id: v1(),
                    name: 'Dimych',
                    img: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
                },
                {
                    id: v1(),
                    name: 'Andrey',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8rp-mtskOgky5nTQ9ky6ukU91Lr4FjhzWw&usqp=CAU'
                },
                {
                    id: v1(),
                    name: 'Sveta',
                    img: 'https://wlcat.ru/wp-content/uploads/2020/10/Cat-Wearing-COVID-19-Mask.jpg'
                },
                {
                    id: v1(),
                    name: 'Sasha',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYABUeQR1dMoqDCZYEkRsntwM5kqnADmv3zUvuQD7eHMnBZ2SmsWuCS8R3TEOmcIW-BLM&usqp=CAU'
                },
                {
                    id: v1(),
                    name: 'Viktor',
                    img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg'
                },
                {
                    id: v1(),
                    name: 'Valera',
                    img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/09C5/production/_116210520_neo4_976.jpg'
                }
            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How is your IT?'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Yoo'},
                {id: v1(), message: 'Yooo'},
                {id: v1(), message: 'Yoooo'}
            ],
            newMessageText: ''

        },
        navbarPage: {
            navigation: [
                {id: v1(), to: '/profile', title: 'Profile'},
                {id: v1(), to: '/dialogs', title: 'Messages'},
                {id: v1(), to: '/news', title: 'News'},
                {id: v1(), to: '/music', title: 'Music'},
                {id: v1(), to: '/settings', title: 'Settings'},
            ]
        }
    },
    _callback(_state: StateType) {
    },

    subscribe(observer) {
        this._callback = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action)

        this._callback(this._state)
    }
}


export default store
