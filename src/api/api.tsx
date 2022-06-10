import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f272445b-402b-4b0f-ba99-09cb5a98a4e4'
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    follow(id: string) {
        return instance.post(`follow/${id}`).then(res => res.data)
    },
    unfollow(id: string) {
        return instance.delete(`follow/${id}`).then(res => res.data)
    },
}

export const profileAPI = {
    getProfile(id: string) {
        return instance.get(`profile/${id}`).then(res => res.data)
    },
    getStatus(id: string) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: boolean){
      return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
}
