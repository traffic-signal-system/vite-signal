<template>
  <div id="mapViewDiv" class="mapViewDiv"></div>
</template>

<script setup lang="ts">
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import { onMounted } from "vue";
import '@arcgis/core/assets/esri/themes/dark/main.css'

onMounted(() => {
  const map = new Map({
    basemap: "topo-vector",
  });
  console.log(map);
  const mapView = new MapView({
    container: "mapViewDiv",
    map: map,
    center: [-74.045459, 40.690083], // Liberty Island, NY, USA
    zoom: 16,
  });
});
</script>

<style scoped>
.mapViewDiv {
  width: 500px;
  height: 500px;
}
</style>

