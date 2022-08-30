import { createApp, toRaw } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Router from '@/router'
import { createPinia, PiniaPluginContext } from 'pinia'

type Options = {
    key?: string
}
const __piniaKey__:string = 'aiton'
const store = createPinia()
const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}
const getStorage = (key:string) =>{
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) :{}
}
const piniaPlugin = (options: Options) => {
    return (context: PiniaPluginContext) => {
        // console.log(context,'context')
        const { store } = context
        const data =  getStorage(`${options?.key ??__piniaKey__}-${store.$id}`)
        console.log(data)
        store.$subscribe(() => {
            console.log('change')
            setStorage(`${options?.key ??__piniaKey__}-${store.$id}`,toRaw(store.$state))
        })
        //console.log(store, 'store')
        return {
            ...data
        }
    }
}

store.use(piniaPlugin({
    key: 'pinia'
}))
const app = createApp(App)
// createApp(App).mount('#app')
app.use(Router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
