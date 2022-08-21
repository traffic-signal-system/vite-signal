import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Router from '@/router'
import { store, key } from '@/store'
// createApp(App).mount('#app')
const app = createApp(App)

app.use(Router)
// pass the injection key
app.use(store, key)
app.use(ElementPlus)
app.mount('#app')
