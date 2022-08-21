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