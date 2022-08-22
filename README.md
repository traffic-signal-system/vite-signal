# 开发文档

## 创建项目

### 安装

```shell
npm create vite vite-vue3 -- --template vue-ts
npm i
npm run dev
```

### 修改vite配置文件

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    outDir: 'dest'
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    proxy: {
      '/educms': {
        target: 'http://localhost:6004/educms',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/educms/, '')
      }
    },
    cors: true
  },
  resolve: {
    // 配置别名
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})

```

## element-plus

### 安装

```shell
npm install element-plus --save
```

### 使用

```ts
<template>
  <el-button :plain="true" @click="open">Show message</el-button>
  <el-button :plain="true" @click="openVn">VNode</el-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElMessage } from 'element-plus'

const open = () => {
  ElMessage('this is a message.')
}

const openVn = () => {
  ElMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>

```



## 增加js-cookie

### 安装

```shell
npm install --save js-cookie
npm install --save @types/js-cookie
```

### 配置文件

```ts
#auth.ts



import Cookies from 'js-cookie'
// cookie保存的天数
 
export const TOKEN_KEY = 'NOW_TOKEN'
 
export const setToken = (token:string, cookieExpires:any) => {
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
```

### 使用

```ts
import { getToken, delToken } from './util'
```



## 增加router

### 安装vue-router@4

```shell
npm i vue-router@4 --save
```

### 引入方式及配置

```ts
import { createRouter, createWebHashHistory } from "vue-router";

import Home from '@/views/Index.vue'
// import Login from '@/components/Login.vue'
import Login from '@/views/Login.vue'
const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/",
        name: "Login",
        component: Login
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router
```

```ts
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

```

### 路由跳转

```ts
一、编程式跳转
<div class="hello">
    <h1>张三</h1>
    <button @click="btn">跳转</button>
</div>
 
<script setup>
/**
 * 从vue-router中引入useRouter
 * 定义变量调用useRouter，得到返回值，router对象
 * 使用router.push进行页面跳转
 * 写法一：直接在push中写入路径，字符串；eg:router.push('/about')
 * 写法二：在push中写入对象，对象的中key为path，对应路由表中path的名称；eg：router.push({path: '/about'})
 * 写法三：在push中写入对象，对象的中key为name， 对应路由表中name的名称；eg：router.push({name: 'about'})
 */
import { useRouter } from 'vue-router'
const router = useRouter()
const btn = function () {
  // router.push('/about')
  // router.push({path: '/about'})
  router.push({name: 'about'})
}
</script>
```

```ts
二、声明式跳转
/**
 * 声明式跳转
 * 使用router-link进行跳转
 * 写法一：<router-link to="/about">点击</router-link>
 * 写法二：<router-link :to="{path: '/about'}">点击</router-link>
 * 写法三：<router-link :to="{name: 'about'}" >点击</router-link>：注，如果路由中未配置name，那么使用name则会报错
 */
 <!--    <router-link to="/about">点击</router-link>-->
<!--    <router-link :to="{path: '/about'}">点击</router-link>-->
    <router-link :to="{name: 'about'}" >点击</router-link>
```

### 跳转传参

```ts
编程式跳转参数
/**
 * 从vue-router中引入useRouter
 * 定义变量调用useRouter，得到返回值，router对象
 * 使用router.push进行页面跳转
 * 跳转一：直接在push中写入路径，字符串；使用？来进行参数拼接，直接和url地址上一致
 * eg:router.push('/about?id=1')
 * 跳转二：在push中写入对象，对象的中key为path，对应路由表中path的名称；
 * eg：router.push({path: '/about', query: {id: 1} })
 * 跳转三：在push中写入对象，对象的中key为name，对应路由表中name的名称，在页面跳转过程中，根据name名称可以找到对应的path路径；
 * eg：router.push({name: 'about', query: {id: 1} })
 */
 import { useRouter } from 'vue-router'
const router = useRouter()
const btn = function () {
  // router.push('/about?id=1')
  // router.push({path: '/about', query: {id: 1}})
  router.push({name: 'about', query: {id: 1}})
}
```

```ts
编程式跳转参数
/**
 * 从vue-router中引入useRouter
 * 定义变量调用useRouter，得到返回值，router对象
 * 使用router.push进行页面跳转
 * 跳转一：直接在push中写入路径，字符串；使用？来进行参数拼接，直接和url地址上一致
 * eg:router.push('/about?id=1')
 * 跳转二：在push中写入对象，对象的中key为path，对应路由表中path的名称；
 * eg：router.push({path: '/about', query: {id: 1} })
 * 跳转三：在push中写入对象，对象的中key为name，对应路由表中name的名称，在页面跳转过程中，根据name名称可以找到对应的path路径；
 * eg：router.push({name: 'about', query: {id: 1} })
 */
 import { useRouter } from 'vue-router'
const router = useRouter()
const btn = function () {
  // router.push('/about?id=1')
  // router.push({path: '/about', query: {id: 1}})
  router.push({name: 'about', query: {id: 1}})
}
```

```ts
编程式跳转参数
<script setup>
/**
 * 从vue-router中引入useRouter
 * 定义变量调用useRouter，得到返回值，router对象
 * 使用router.push进行页面跳转
 * 写法：在push中写入对象，对象的中key为name，对应路由表中name的名称，在页面跳转过程中，根据name名称可以找到对应的path路径；
 * 当前在写法需要在路由表中去配置，如果不配置回车刷新，数据丢失
 * eg：router.push({name: 'about', params: {id: 1} })
 * 在路由表中配置当前name所对应的path
 * 配置写法：name所对应的path路径/:id
 * 注，如果路由中未配置name，那么使用name则会报错
 */
import { useRouter } from 'vue-router'
const router = useRouter()
const btn = function () {
  router.push({name: 'about', params: {id: 1}})
}
</script>
```

```ts
声明式跳转参数
/**
 * 声明式跳转
 * 使用router-link进行跳转
 * 写法三：直接使用:to去绑定对象的形式传参，如果对象中的key是name,那么直接添加一个key为params的键,
 * 当前在写法需要在路由表中去配置，如果不配置回车刷新，数据丢失
 * <router-link :to="{name: 'about', params: {id: 1}}" >点击</router-link>
 * 在路由表中配置当前name所对应的path
 * 配置写法：name所对应的path路径/:id
 * 注，如果路由中未配置name，那么使用name则会报错
 */
 router配置
{
    path: '/about/:id', // 在path路径拼接你所要传递的参数名称
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
}
```





### 接参

```ts
<div class="about">
    <h1>{{ state.id }}</h1>
</div>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.query.id)
const state = route.query
</script>
```

```ts
<div class="about">
    <h1>{{ state.id }}</h1>
</div>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.id)
const state = route.params
</script>
```

## openlayer

### 安装

```shell
npm install ol
```

### 使用

```ts
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
```

```ts
<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import XYZ from 'ol/source/XYZ'

import { useStore } from 'vuex'
import { key } from '@/store'
import router from '@/router';
import 'ol/ol.css'


const count = ref(0)
let map:Map //= ref(null) // 绑定地图实例的变量

// 初始化地图
function initMap() {
   map  = new Map({
    target: 'map', // 对应页面里 id 为 map 的元素
    layers: [ // 图层
      new Tile({ // 瓦片
        // source: new OSM() // OSM底图
         source: new XYZ({
              url: 'http://192.168.0.25:6005/tile/{z}/{x}/{y}.png'
            })
      })
    ],
    view: new View({ // 地图视图
      projection: "EPSG:4326", // 投影规则
      center: [113.120444,23.034742], // 中心点
      zoom: 12 // 默认缩放级别
    })
  })
}

onMounted(() => {
  // 在元素加载完之后再执行地图初始化
  initMap()
})
</script>

<template>

  <div class="card">
    <div tabindex="2" id="map" class="map__x"></div>
    <div id="popup" style="padding: 10px;background-color: white;"></div>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.map__x {
  width: 600px;
  height: 600px;
  border: 1px solid #eee;
}
</style>


```





## aoxis

### 安装

```shell
npm install axios


```

```shell
|- src
|- |- api
|- |- |- index.ts
|- |- |- custome.ts
|- |- utils
|- |- |- request.ts
```

### 新建工具类 `request.ts`

```ts
/**
 * @description [ axios 请求封装]
 */
 import axios from 'axios'
 import { ElMessage, ElMessageBox } from 'element-plus'
 import type { Action } from 'element-plus'
 
 const service = axios.create({
     baseURL: '', // url = base url + request url
     timeout: 5000,
     withCredentials: true,  // send cookies when cross-domain requests
     headers: {
         // clear cors
         'Cache-Control': 'no-cache',
         'Pragma': 'no-cache'
     }
 })
 
 // Request interceptors
 service.interceptors.request.use(
     (config : any) => {
         // Add Authorization header to every request, you can add other custom headers here
         // 在此处添加请求头等，如添加 token
         // config.headers['Authorization'] = 'tokentokentokentokentokentokenhhh'
         return config
     },
     (error : any) => {
         Promise.reject(error)
     }
 )
 
 // Response interceptors
 service.interceptors.response.use(
     (response : any) => {
         const res = response.data
         if (res.code !== 20000) {
            ElMessage.error('Oops, this is a error message.')
 
             if (res.status === 401 || res.status === 403 || res.status === 408) {
                 // 警告提示窗
                 
                 ElMessageBox.alert('你已被登出，可以取消继续留在该页面，或者重新登录', '提示', {
                    // if you want to disable its autofocus
                    // autofocus: false,
                    confirmButtonText: 'OK',
                    callback: (action: Action) => {
                      ElMessage({
                        type: 'info',
                        message: `action: ${action}`,
                      })
                    },
                  })
                
             }            
             // 若后台返回错误值，此处返回对应错误对象，下面 error 就会接收
             return Promise.reject(new Error(res.info || 'Error'))
         } else {
             // 注意返回值
             return response.data
         }        
     },
     (error : any) => {
         if (error && error.response) {
             switch (error.response.status) {
                 case 400: error.message = '请求错误(400)'; break;
                 case 401: error.message = '未授权,请登录(401)'; break;
                 case 403: error.message = '拒绝访问(403)'; break;
                 case 404: error.message = `请求地址出错: ${error.response.config.url}`; break;
                 case 405: error.message = '请求方法未允许(405)'; break;
                 case 408: error.message = '请求超时(408)'; break;
                 case 500: error.message = '服务器内部错误(500)'; break;
                 case 501: error.message = '服务未实现(501)'; break;
                 case 502: error.message = '网络错误(502)'; break;
                 case 503: error.message = '服务不可用(503)'; break;
                 case 504: error.message = '网络超时(504)'; break;
                 case 505: error.message = 'HTTP版本不受支持(505)'; break;
                 default: error.message = `连接错误: ${error.message}`; 
             }
         } else {
             error.message = '连接到服务器失败，请联系管理员'
         }        
         ElMessage.error(error.info || error.message ||  'Error')
         return Promise.reject(error)
     }
 )
 
 export default service
```

### api使用`signal.ts`

```ts
import request from '@/utils/request'    //在vite-env.d.ts中进行声明 declare module '@/*'   就不会报错
const api_name = 'educms/cms-dictionary/get/1'

export default {
    findAll() {
        request({
            url: api_name,
            method: 'get',
            params: {

            }
        }).then((res: any) => {
            console.log(res)
        })
    }
}
```



## vuex

### 安装

```shell
npm i vuex@next --save
```

### 配置`$store`属性

```ts
// vuex.d.ts
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    count: number
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
```

### 配置`useStore`

在`src`新建文件夹`store`，再新建文档`index.ts`

```ts
// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
  count: number,
  isLogin: boolean,
  userInfo:{
    id:string,
    openid:string,
    mobile:string,
    password:string,
    nickname:string,
    sex:number,
    age:number,
    avatar:string,
    sign:string,
    gmtCreate:string,
    gmtModified:string,
    isDisabled:boolean,
    isDeleted:boolean
  }
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    isLogin: false,
    userInfo:{
      id:'string',
      openid:'string',
      mobile:'string',
      password:'string',
      nickname:'string',
      sex:0,
      age:0,
      avatar:'string',
      sign:'string',
      gmtCreate:'string',
      gmtModified:'string',
      isDisabled:false,
      isDeleted:false
    }
  }
})

```



### 修改 `main.ts`文档

```ts
// main.ts
import { createApp } from 'vue'
import { store, key } from './store'

const app = createApp({ ... })

// pass the injection key
app.use(store, key)

app.mount('#app')
```

### 最后Vue中使用

```ts

import { useStore } from 'vuex'
import { key } from '@/store'

import { ref, onMounted, isRef, shallowRef, triggerRef, customRef, reactive, readonly } from 'vue';

const store = useStore(key)
// 初始化地图
function initMap(this: any) {
  count = store.state.count // typed as number
}

function chang() {
  store.state.count++
  console.log(store.state.count)
}

onMounted(() => {
  // 在元素加载完之后再执行地图初始化
  initMap()
})

<template>
  <div>
    <el-button>Hello route view</el-button>
    <el-button @click="chang">store:{{ count }}</el-button>
  </div>

</template>




```



## 配置代理跨域

```ts
  #vite.config.ts
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    proxy: {
      '/educms': {
        target: 'http://localhost:6004/educms',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/educms/, '')
      }
    },
    cors: true
  },
```

## 配置PATH别名

### 配置文件

配置`vite.config.ts`文件

```ts
import { resolve } from 'path'
    
  resolve: {
    // 配置别名
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
```

### 清除出错信息

配置 `vite-env.d.ts` 文件

```ts
declare module '@/*'
```

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
