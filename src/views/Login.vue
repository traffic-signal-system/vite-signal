<template>
  <div>
    <el-button>Hello route view</el-button>
    <el-button @click="chang">store:{{ count }}</el-button>
  </div>

</template>

<script setup lang="ts">

import request from '@/api/signal'
import { useStore } from 'vuex'
import { key } from '@/store'
import router from '@/router';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { ref, onMounted, isRef, shallowRef, triggerRef, customRef, reactive, readonly } from 'vue';

let count = ref(0)
const store = useStore(key)
// 初始化地图
function initMap(this: any) {
  request.findAll()
  count = store.state.count // typed as number
}

function chang() {
  store.state.count++
  console.log(store.state.count)
  router.push({ name: 'Home' })
}

onMounted(() => {
  // 在元素加载完之后再执行地图初始化
  initMap()
})
</script>

<style scoped>
</style>
