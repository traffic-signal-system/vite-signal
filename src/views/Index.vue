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
const store = useStore(key)
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

<template>

  <div class="card">
    <div tabindex="2" id="map" class="map__x"></div>
    <el-button @click="chang">测试Element</el-button>
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
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
