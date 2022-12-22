<template>
  <AddSingalVue></AddSingalVue>
  <div id="mapViewDiv" class="mapViewDiv">
    <div id="electric-police-topbar" class="electric-police-topbar">
      <button class="esri-widget--button esri-widget esri-interactive esri-icon-media "
        id="point-button-electric-police" type="button"></button>
      <button class="esri-widget--button esri-widget esri-interactive esri-icon-media2" id="point-button-gateway"
        type="button" th:title="#{index.html.gateway}"></button>
      <!--<button class="esri-widget--button esri-widget esri-interactive esri-icon-trash" id="point-button-electric-police-reset" type="button" th:title="#{index.html.clear.graphic}"></button>-->
    </div>
    <div id="video-topbar" class="video-topbar">
      <button class="esri-widget--button esri-widget esri-interactive esri-icon-radio-checked" id="point-button-video"
        type="button" th:title="#{index.html.video}"></button>
      <!--<button class="esri-widget--button esri-widget esri-interactive esri-icon-trash" id="point-button-video-reset" type="button" th:title="#{index.html.clear.graphic}"></button>-->
    </div>
    <div id="signal-topbar" class="signal-topbar">
      <button class="esri-widget--button esri-widget esri-interactive esri-icon-lightbulb" id="point-button-signal"
        type="button" th:title="#{index.html.signal}"></button>
      <button class="esri-widget--button esri-widget esri-interactive esri-icon-polyline"
        id="point-button-signal-greenwave" type="button" th:title="#{index.html.greenwave}"></button>
      <button class="esri-widget--button esri-widget esri-interactive esri-icon-collection"
        id="point-button-signal-region" type="button" th:title="#{index.html.region}"></button>
      <button class="esri-widget--button esri-widget esri-interactive esri-icon-maps" id="point-button-signal-subregion"
        type="button" th:title="#{index.html.subregion}"></button>
      <button class="esri-widget--button esri-widget esri-interactive esri-icon-share"
        id="point-button-signal-guardduty" type="button" th:title="#{index.html.guardduty}"></button>
      <button class="esri-widget--button esri-widget esri-interactive esri-icon-group" id="point-button-signal-vip"
        type="button" th:title="#{index.html.vip}"></button>
      <button class="esri-widget--button esri-widget esri-interactive esri-icon-trash" id="point-button-signal-reset"
        type="button" th:title="#{index.html.clear.graphic}"></button>
    </div>
    <div id="fault-topbar" class="fault-topbar">
      <button class="esri-widget--button esri-widget esri-interactive esri-icon-bookmark" id="point-button-fault"
        type="button" th:title="#{index.html.nav.fault}"></button>
      <button class="esri-widget--button esri-widget esri-interactive esri-icon-collection" id="point-button-fault-add"
        type="button" th:title="#{index.html.nav.fault.add}"></button>
      <button class="esri-widget--button esri-widget esri-interactive esri-icon-user" id="point-button-fault-user"
        type="button" th:title="#{index.html.nav.fault.man}"></button>
      <button class="esri-widget--button esri-widget esri-interactive esri-icon-lightbulb"
        id="point-button-fault-solution" type="button" th:title="#{index.html.nav.fault.solution}"></button>
    </div>
  </div>

</template>

<script setup lang="ts">
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { onMounted, ref } from "vue";
import AddSingalVue from "../components/AddSingal.vue";
import Search from "@arcgis/core/widgets/Search";
import Locate from "@arcgis/core/widgets/Locate";
import Track from "@arcgis/core/widgets/Track";
import FeatureLayerView from "@arcgis/core/views/layers/FeatureLayerView";
import Graphic from "@arcgis/core/Graphic";
import signal from "../api/signal";
import '@arcgis/core/assets/esri/themes/dark/main.css'


//信号机图标
const LIGHT = {
  type: "picture-marker",
  url: "http://localhost:3000/icon/traffic_light.svg",
  width: "32px",
  height: "32px"
};

const measureThisAction = {
  title: "Measure Length",
  id: "measure-this",
  image: "http://localhost:3000/icon/traffic_light.svg"
};

const collisionAction = {
  title: "Measure Length",
  id: "measure-this",
  image: "http://localhost:3000/icon/collision.svg"
};
const phaseAction = {
  title: "Measure Length",
  id: "measure-this",
  image: "http://localhost:3000/icon/phase.svg"
};
const errorAction = {
  title: "Measure Length",
  id: "measure-this",
  image: "http://localhost:3000/icon/error.svg"
};
const planAction = {
  title: "Measure Length",
  id: "measure-this",
  image: "http://localhost:3000/icon/plan.svg"
};
const relationAction = {
  title: "Measure Length",
  id: "measure-this",
  image: "http://localhost:3000/icon/relation.svg"
};
const scheduleAction = {
  title: "Measure Length",
  id: "measure-this",
  image: "http://localhost:3000/icon/schedule.svg"
};
const stageAction = {
  title: "Measure Length",
  id: "measure-this",
  image: "http://localhost:3000/icon/stage.svg"
};
onMounted(() => {

  let weblayer = new WebTileLayer({
    urlTemplate: 'http://localhost:3000/api/tile/{level}/{col}/{row}.png',
    subDomains: ['a', 'b', 'c', 'd']
  });
  const map = new Map({
    basemap: "topo-vector",
    layers: [weblayer]
  });
  console.log(map);
  const mapView = new MapView({
    container: "mapViewDiv",
    map: map,
    center: [118.063, 24.567], // Liberty Island, NY, USA
    zoom: 16,
  });

  const search = new Search({  //Add Search widget
    view: mapView
  });
  //定位工具
  const locateBtn = new Locate({
    view: mapView
  });
  // Create an instance of the Track widget
  var track = new Track({
    view: mapView
  });
  mapView.ui.add([
    {
      component: search,
      position: "top-right",
      index: 0
    }, {
      component: locateBtn,
      position: "top-left",
      index: 1
    }, {
      component: track,
      position: "top-left",
      index: 0
    }
  ]);


  //信号机客户端图层
  let signalGraphicsLayer = new GraphicsLayer({
    title: "信号机图层",
    id: "signalGraphicsLayer"
  });
  map.add(signalGraphicsLayer);
  /**
     * 高亮显示点中的Graphic元素
     * 用到地方：view.on("pointer-move", function (event)  和    view.on("click", function (event)
     * 其它地方：不要进行使用
     */
  let highlight: FeatureLayerView;
  /**
   * 在地图上点击Graphic元素，
   * 1、将点击中的Graphic保存到selectedGraphic对象中
   * 2、点击中的Graphic 既要 highlight 高亮显示 ，也要将数据保存到selectedGraphic中
   * 3、作用，将在后面操作中使用这个对象，以便进行Graphic对象attributes属性使用和其它操作
   * 代码中可以根据attributes的ID，IP ，PORT等属性进行数据库记录操作
   * 4、作用域，整个require域，涉及到后面的操作，
   *     地图上点击 事件 view.on("click", function (event);
   *     地图上点击 删除按钮事件，将保存在selectedGraphic对象进行删除操作，更新GraphicLayers图层
   */
  let selectedGraphic;
  /**
   * //地图点击响应事件，点击节点后弹出相应节点的操作界面
   * ，如信号机的界面，包括手控界面、相位配置、时基等
   * 如视频监控的界面，包括监控显示界面、监控操作界面
   *
   */

  mapView.on("click", function (event) {
    //高亮显示的元素进行删除高亮
    // if(highlight){
    //     highlight.remove();
    // }
    mapView.hitTest(event).then(function (res) {
      /**
       * /这里判断点击地图上的节点元素
       * 多个Graphic元素：res.results.length>1 这里可以实际更多的操作
       * 一个Graphic元素：目前实现对点击的元素进行弹出操作
       * 没有Graphic元素：不进行操作，或进行提示，没有点击到Graphic元素
       */
      console.log(res)
      if (res.results.length >= 1) {
        //TODO 后期可以对叠加的Graphic 点击事件处理，目前只取得点击Graphic的第一个
        var graphic = res.results[0];
        console.log(graphic)
        //console.log(marker.graphic.attributes); // 获取捆绑的属性
        // var graphic = res.results[0].graphic;
        // selectedGraphic = graphic;
        //点击得到的元素进行高亮显示
        mapView.whenLayerView(graphic.layer).then(function (lyrView) {
          console.log(lyrView)
          // highlight = lyrView.highlight(graphic);
        })
        /**
         * 信号子系统 绿波带建立代码区
         * 在地图上：1、点信号节点 开始节点；2、点击第二个节点，连接第二个节点；3、点击第三个节点，连接第三个节点；4、直到完成最后一个节点
         * pointType 在地图上，点击工具档的某个节点类型图标
         * graphic.attributes.nodeType === NODETYPE_TSC 信号机节点，在初始化到地图上显示节点图标的时候，便加载属性到节点上，用于判断是否是信号节点 ，还是电子警察节点，或是视频节点等
         */
        // if(pointType === POINTTYPE_GREENWAVE && graphic.attributes.nodeType ===NODETYPE_TSC){
        //     drawGreenWaveLine(graphic.attributes.longitude,graphic.attributes.latitude);
        //     toastr.warning("绿波配置选中信号节点:" + graphic.attributes.ipAddress + ":id=" + graphic.attributes.id);
        //     greenwaveNodeArray.push(graphic.attributes.id);
        // }else if(pointType === POINTTYPE_GUARDDUTY && graphic.attributes.nodeType ===NODETYPE_TSC){
        //     drawGuarddutyLine(graphic.attributes.longitude,graphic.attributes.latitude);
        //     if(guardDuty.getGuardDuty()){
        //         toastr.warning("特勤警卫选中信号节点:" + graphic.attributes.ipAddress + ":id=" + graphic.attributes.id);
        //         guardDuty.pushSignalArray(graphic.attributes);
        //     }
        // }else if(pointType === POINTTYPE_VIP && graphic.attributes.nodeType ===NODETYPE_TSC){
        //     drawVipLine(graphic.attributes.longitude,graphic.attributes.latitude);
        //     toastr.warning("VIP路线选中信号节点:" + graphic.attributes.ipAddress + ":id=" + graphic.attributes.id);
        //     vipNodeArray.push(graphic.attributes.id);
        // }else if(pointType === POINTTYPE_NONE && graphic.attributes.nodeType ===NODETYPE_TSC){
        //     if (graphic.attributes.online) {
        //         // signalReportState(selectedGraphic);
        //     }else{
        //         toastr.error("信号机离线状态，无法打开！");
        //     }
        // }
      } else {
        //TODO 地图上点击事件，没有点击到Graphic元素，不进行任务操作
      }

    });
  });



  initSignal(signalGraphicsLayer);
});

function initSignal(signalGraphicsLayer) {

  let res = signal.findOnline()
    .then((res: any) => {
      console.log(res)
      if (res['code'] == 20000) {
        signalGraphicsLayer.removeAll();
        res['data'].forEach((v: { longitude: any; latitude: any; id: any; name: any; ipAddress: any; port: any; maintainAppUserid: any; crossId: any; alivePort: any; online: any; signalControllerId: any; }) => {
          let log = v.longitude;
          let lat = v.latitude;
          // First create a point geometry (this is the location of the Titanic)
          let point = {
            type: "point", // autocasts as new Point()
            longitude: log,
            latitude: lat,
            z: 15
          };

          // Create an object for storing attributes related to the line
          let lineAtt = {
            "nodeType": "",
            "id": v.id,
            "name": v.name,
            "ipAddress": v.ipAddress,
            "port": v.port,
            "latitude": v.latitude,
            "longitude": v.longitude,
            "maintainAppUserid": v.maintainAppUserid,
            "crossId": v.crossId,
            "alivePort": v.alivePort,
            "online": v.online,
            "signalControllerId": v.signalControllerId
          };
        
          const template = {
            // autocasts as new PopupTemplate()
            title: "Trail run",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "name"
                  },
                  {
                    fieldName: "ipAddress"
                  },
                  {
                    fieldName: "port"
                  },
                  {
                    fieldName: "latitude"
                  },
                  {
                    fieldName: "longitude"
                  },
                  {
                    fieldName: "online"
                  }
                ]
              }, {
                type: "text",
                text: "sdfasdfasdfasdfasdfasdf"
              }
            ],
            actions: [measureThisAction,collisionAction,phaseAction,errorAction,relationAction,planAction,scheduleAction,stageAction]
          };
          let pointGraphic = new Graphic({
            geometry: point,
            symbol: LIGHT,
            attributes: lineAtt,
            color: [226, 119, 40],
            outline: {
              // autocasts as new SimpleLineSymbol()
              color: [255, 255, 255],
              width: 2
            },
            popupTemplate: template,

          })

          signalGraphicsLayer.graphics.add(pointGraphic);
        })
      } else {

      }
    });
}
</script>

<style scoped>
html,
body,
#mapViewDiv {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

/***
右上角按钮定位，增加信号机、视频、电子警察卡口
 */
.video-topbar {
  background: #242424;
  position: absolute;
  top: 15px;
  left: 55px;
  margin-left: 63px;
  padding: 0px;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
}

.signal-node-topbar {
  background: #242424;
  position: absolute;
  top: 15px;
  left: 55px;
  margin-left: 400px;
  padding: 0px;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
}

.signal-topbar {
  background: #242424;
  position: absolute;
  top: 15px;
  left: 55px;
  margin-left: 96px;
  padding: 0px;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
}

.fault-topbar {
  background: #242424;
  position: absolute;
  top: 15px;
  left: 55px;
  margin-left: 314px;
  padding: 0px;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
}

.display-topbar {
  background: #242424;
  position: absolute;
  top: 15px;
  left: 55px;
  margin-left: 400px;
  padding: 0px;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
}

.electric-police-topbar {
  background: #242424;
  position: absolute;
  top: 15px;
  left: 55px;
  padding: 0px;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
}

.esri-widget--button esri-widget esri-interactive {
  margin-right: -1px;
  font-size: 16px;
  background-color: transparent;
  border: 0px solid #d3d3d3;
  color: #6e6e6e;
  height: 32px;
  width: 32px;
  text-align: center;
  font-family: Arial;
}

.esri-widget--button esri-widget esri-interactive:hover,
.esri-widget--button esri-widget esri-interactive:focus {
  background: #0079c1;
  color: #e4e4e4;
}

.active {
  background: #0079c1;
  color: #e4e4e4;
}
</style>

