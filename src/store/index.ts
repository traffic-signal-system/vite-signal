import { resolve } from 'path'
import { defineStore } from 'pinia'
import { Names } from './store-name'

type User = {
  name: string,
  age: number
}

// let result:User = {
//   name:'fly',
//   age:999
// }

const Login = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'kaka',
        age: 888
      })
    },2000)
  })
}
export const useTestStore = defineStore(Names.TEST, {
  state() {
    return {
      user: <User>{},
      current: 1,
      name: 'big one'
    }
  },
  getters: {
    newName ():string{
      return `$- ${this.name}`
    },
    getUserAge():number{
      return this.user.age
    }
  },
  actions: {
    setCurrent() {
      this.current = 10198
    },
    async setUser() {
      // this.user = result
      const result = await Login()
      this.user = result
      this.setName('blibli')
    },
    setName(name:string){
      this.name = name
    }
  }
})


export const useBaseStore = defineStore(Names.BASE, {
  state() {
    return {
      user: <User>{},
      current: 1,
      name: 'big one'
    }
  },
  getters: {
    newName ():string{
      return `$- ${this.name}`
    },
    getUserAge():number{
      return this.user.age
    }
  },
  actions: {
    setCurrent() {
      this.current = 10198
    },
    async setUser() {
      // this.user = result
      const result = await Login()
      this.user = result
      this.setName('base')
    },
    setName(name:string){
      this.name = name
    }
  }
})