import Cookies from 'js-cookie'
// cookie保存的天数

export const TOKEN_KEY = 'NOW_TOKEN'

export const setToken = (token: string, cookieExpires: any) => {
    Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}

export const getToken = () => {
    const token = Cookies.get(TOKEN_KEY)
    if (token) return token
    else return false
}

export const delToken = () => {
    Cookies.remove(TOKEN_KEY)
}