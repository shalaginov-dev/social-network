import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f272445b-402b-4b0f-ba99-09cb5a98a4e4'
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(id: string){
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data
            })
    },
    follow(id: string){
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(id: string){
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    auth(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
}

