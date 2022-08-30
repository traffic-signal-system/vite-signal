<template>
  <div>
    <p>pinia:{{ Test.current }}</p>
    <p>pinia:{{ current }}----{{ name }}</p>
    <p>user:{{ Test.user }}</p>
    <p>getts:{{ Test.newName }} - {{ Test.getUserAge }}</p>
    <el-button @click="changB">Hello route view</el-button>
    <el-button @click="chang">store:{{ count }}</el-button>
    <el-button @click="reset">Reset</el-button>
  </div>

</template>

<script setup lang="ts">

// import request from '@/api/signal'
import router from '@/router';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { ref, onMounted, isRef, shallowRef, triggerRef, customRef, reactive, readonly } from 'vue';
import { useTestStore,useBaseStore } from '@/store'
import { storeToRefs } from 'pinia';

const Test = useTestStore()
const Base = useBaseStore()
const { current, name } = storeToRefs(Test)
let count = ref(0)
// 初始化地图
function initMap(this: any) {
  // request.findAll()
}
Test.$subscribe((args: any, state: any) => {
  console.log('---', args)
  console.log('---', state)
},{
  detached:true
})
Test.$onAction((args: any) => {
  args.after(()=>{
    console.log('after')
  })
  console.log(args)
},true)
const reset = () => {
  Test.$reset()
}

function changB() {
  // Test.current++
  Base.setUser()
  // router.push({ name: 'Home' })
}
function chang() {
  // Test.current++
  // Test.$patch({
  //   current: 888,
  //   name: 'cccc'
  // })
  // Test.$patch((state: any) => {
  //   state.current = 999
  //   state.name = 'bb'
  // })

  // Test.$state = {
  //   current: 20000,
  //   name:'ddddd'
  // }
  console.log(current, name)
  Test.setCurrent()
  Test.setUser()
  // router.push({ name: 'Home' })
}

onMounted(() => {
  // 在元素加载完之后再执行地图初始化
  initMap()
})
</script>

<style scoped>
</style>
