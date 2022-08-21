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
