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