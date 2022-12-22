import request from '@/utils/request'    //在vite-env.d.ts中进行声明 declare module '@/*'   就不会报错
const api_name = 'signal/node'

export default {
    findAll() {
        return request({
            url: `${api_name}/findAll`,
            method: 'get',
            params: {
            }
        })
        // .then((res: any) => {
        //     // console.log(res)
        //     return res;
        // })
    },
    findOnline() {
        return request({
            url: `${api_name}/findOnline`,
            method: 'get',
            params: {
            }
        })
    }
}