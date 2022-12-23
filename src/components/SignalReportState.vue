<template>
  <el-button text class="toolbar">
    open the outer Dialog
  </el-button>

  <el-dialog v-model="outerVisible" title="Outer Dialog" style="width: 636px;">
    <template #default>
      <el-row>
        <div class="bg-box">
          <el-col :span="24">
            <el-row>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple">

                  <div style="display: inline-block;">
                    <el-image id="extReport-direc-d0" class="light-north" title="北调头"
                      src="http://localhost:3000/icon/greenone.png"></el-image>

                  </div>
                  <div style="display: inline-block;">
                    <el-image id="extReport-direc-d7" class="light-north" title="北特殊"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <img id="extReport-direc-d7" class="light" src="http://localhost:3000/icon/offone.png"
                      title="北特殊"> -->
                  </div>
                  <div style="display: inline-block;">
                    <el-image id="extReport-direc-d5" class="light-north" title="北其它"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <img id="extReport-direc-d5" class="img-rounded light" src="http://localhost:3000/icon/offone.png"
                      title="北其它"> -->
                  </div>
                  <div style="display: inline-block;">
                    <el-image id="extReport-direc-d4" class="light-north" title="北右"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <img class="img-rounded light" id="extReport-direc-d4" src="http://localhost:3000/icon/offone.png"
                      title="北右"> -->
                  </div>
                  <div style="display: inline-block;">
                    <el-image id="extReport-direc-d2" class="light-north" title="北直"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <img class="img-rounded light" id="extReport-direc-d2" src="http://localhost:3000/icon/offone.png"
                      title="北直"> -->
                  </div>
                  <div style="display: inline-block;">
                    <el-image id="extReport-direc-d1" class="light-north" title="北左"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <img class="img-rounded light" id="extReport-direc-d1" src="http://localhost:3000/icon/offone.png"
                      title="北左"> -->
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light"></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple">
                  <div class="personLoad1">
                    <el-image id="extReport-direc-d8" class="light-pede1" title="北人行"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <img class="img-rounded collisonlight" id="extReport-direc-d8"
                      src="http://localhost:3000/icon/offone.png" title="北人行"> -->
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light">
                  <div class="personLoad1">
                    <el-image id="extReport-direc-d24" class="light-pede2" title="北人行2"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <img class="img-rounded collisonlight" id="extReport-direc-d24"
                      src="http://localhost:3000/icon/offone.png" title="北人行2"> -->
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light"></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light">
                  <el-image id="extReport-direc-d216" class="light-wpede2" title="西人行2"
                    src="http://localhost:3000/icon/greenone.png"></el-image>
                  <!-- <div style="margin-top: 80px;margin-left: 35px;">
                    <img id="extReport-direc-d216" src="http://localhost:3000/icon/offone.png" title="西人行2"
                      class="img-rounded collisonlight">
                  </div> -->
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple">
                  <div class="count-down" id="extReport-report-countdown">99</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple">
                  <el-image id="extReport-direc-d72" class="light-epede1" title="东人行"
                    src="http://localhost:3000/icon/greenone.png"></el-image>
                  <!-- <div style="margin-top: 79px;margin-left: 18px;">
                    <img id="extReport-direc-d72" src="http://localhost:3000/icon/offone.png" title="东人行"
                      class="img-rounded collisonlight">
                  </div> -->
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light">
                  <div class="row">
                    <el-image id="extReport-direc-d71" class="light-east" title="东特殊"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <div>
                      <img id="extReport-direc-d71" class="img-rounded collisonlight"
                        src="http://localhost:3000/icon/offone.png" title="东特殊">
                    </div> -->
                  </div>
                  <div class="row">
                    <el-image id="extReport-direc-d64" class="light-east" title="东调头"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <div>
                      <img id="extReport-direc-d64" class="img-rounded collisonlight"
                        src="http://localhost:3000/icon/offone.png" title="东调头">
                    </div> -->
                  </div>
                  <div class="row">
                    <el-image id="extReport-direc-d69" class="light-east" title="东其它"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <div>
                      <img id="extReport-direc-d69" class="img-rounded collisonlight"
                        src="http://localhost:3000/icon/offone.png" title="东其它">
                    </div> -->
                  </div>
                  <div class="row">
                    <el-image id="extReport-direc-d68" class="light-east" title="东右"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <div>
                      <img id="extReport-direc-d68" class="img-rounded collisonlight"
                        src="http://localhost:3000/icon/offone.png" title="东右">
                    </div> -->
                  </div>
                  <div class="row">
                    <el-image id="extReport-direc-d66" class="light-east" title="东直"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <div>
                      <img id="extReport-direc-d66" class="img-rounded collisonlight"
                        src="http://localhost:3000/icon/offone.png" title="东直">
                    </div> -->
                  </div>
                  <div class="row">
                    <el-image id="extReport-direc-d65" class="light-east" title="东左"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <div>
                      <img id="extReport-direc-d65" class="img-rounded collisonlight"
                        src="http://localhost:3000/icon/offone.png" title="东左">
                    </div> -->
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple">
                  <div class="row">
                  <el-image id="extReport-direc-d193" class="light-west" title="西左"
                    src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <div style="margin-left: 44px;">
                      <img id="extReport-direc-d193" class="img-rounded collisonlight"
                        src="/apigateway/signal/static/img/offone.png" title="西左">
                    </div> -->
                  </div>
                  <div class="row">
                  <el-image id="extReport-direc-d194" class="light-west" title="西直"
                    src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <div style="margin-left: 44px;">
                      <img id="extReport-direc-d194" class="img-rounded collisonlight"
                        src="/apigateway/signal/static/img/offone.png" title="西直">
                    </div> -->
                  </div>
                  <div class="row">
                  <el-image id="extReport-direc-d196" class="light-west" title="西右"
                    src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <div style="margin-left: 44px;">
                      <img id="extReport-direc-d196" class="img-rounded collisonlight"
                        src="/apigateway/signal/static/img/offone.png" title="西右">
                    </div> -->
                  </div>
                  <div class="row">
                  <el-image id="extReport-direc-d197" class="light-west" title="西其他"
                    src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <div style="margin-left: 44px;">
                      <img id="extReport-direc-d197" class="img-rounded collisonlight"
                        src="/apigateway/signal/static/img/offone.png" title="西其他">
                    </div> -->
                  </div>
                  <div class="row">
                  <el-image id="extReport-direc-d199" class="light-west" title="西特殊"
                    src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <div style="margin-left: 44px;">
                      <img id="extReport-direc-d199" class="img-rounded collisonlight"
                        src="/apigateway/signal/static/img/offone.png" title="西特殊">
                    </div> -->
                  </div>
                  <div class="row">
                  <el-image id="extReport-direc-d192" class="light-west" title="西调头"
                    src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <div style="margin-left: 44px;">
                      <img id="extReport-direc-d192" class="img-rounded collisonlight"
                        src="/apigateway/signal/static/img/offone.png" title="西调头">
                    </div> -->
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light">
                  <el-image id="extReport-direc-d200" class="light-wpede1" title="西人行"
                    src="http://localhost:3000/icon/greenone.png"></el-image>
                  <!-- <div style="margin-left: 35px;margin-top: 30px;">
                                            <img id="extReport-direc-d200" src="/apigateway/signal/static/img/offone.png" title="西人行" class="img-rounded collisonlight">
                                        </div> -->
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple">
                  <el-image id="extReport-direc-d88" class="light-epede2" title="东人行2"
                    src="http://localhost:3000/icon/greenone.png"></el-image>
                  <!-- <div style="margin-left: 18px;margin-top: 30px;">
                                            <img id="extReport-direc-d88" src="/apigateway/signal/static/img/offone.png" title="东人行2" class="img-rounded collisonlight">
                                        </div> -->
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light"></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple">
                  <div class="personLoad1">
                    <el-image id="extReport-direc-d152" class="light-spede2" title="南人行2"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <img class="img-rounded collisonlight" id="extReport-direc-d152"
                      src="http://localhost:3000/icon/offone.png" title="南人行2"> -->
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light">
                  <div class="personLoad1">
                    <el-image id="extReport-direc-d136" class="light-spede1" title="南人行"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <img class="img-rounded collisonlight" id="extReport-direc-d136"
                      src="http://localhost:3000/icon/offone.png" title="南人行"> -->
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light"></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light">
                  <div style="display: inline-block;">
                    <el-image id="extReport-direc-d129" class="light-south" title="南左"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <img id="extReport-direc-d129" class="img-rounded collisonlight"
                      src="http://localhost:3000/icon/offone.png" title="南左"> -->
                  </div>
                  <div style="display: inline-block;">
                    <el-image id="extReport-direc-d130" class="light-south" title="南直"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <img id="extReport-direc-d130" class="img-rounded collisonlight"
                      src="http://localhost:3000/icon/offone.png" title="南直"> -->
                  </div>
                  <div style="display: inline-block;">
                    <el-image id="extReport-direc-d132" class="light-south" title="南右"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <img id="extReport-direc-d132" class="img-rounded collisonlight"
                      src="http://localhost:3000/icon/offone.png" title="南右"> -->
                  </div>
                  <div style="display: inline-block;">
                    <el-image id="extReport-direc-d133" class="light-south" title="南其它"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <img id="extReport-direc-d133" class="img-rounded collisonlight"
                      src="http://localhost:3000/icon/offone.png" title="南其它"> -->
                  </div>
                  <div style="display: inline-block;">
                    <el-image id="extReport-direc-d128" class="light-south" title="南调头"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <img id="extReport-direc-d128" class="img-rounded collisonlight"
                      src="http://localhost:3000/icon/offone.png" title="南调头"> -->
                  </div>
                  <div style="display: inline-block;">
                    <el-image id="extReport-direc-d135" class="light-south" title="南特殊"
                      src="http://localhost:3000/icon/greenone.png"></el-image>
                    <!-- <img id="extReport-direc-d135" class="img-rounded collisonlight"
                      src="http://localhost:3000/icon/offone.png" title="南特殊"> -->
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content ep-bg-purple-light"></div>
              </el-col>
            </el-row>
          </el-col>
        </div>

      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content ep-bg-purple-dark"></div>
        </el-col>
      </el-row>

      <el-dialog v-model="innerVisible" width="30%" title="Inner Dialog" append-to-body />
    </template>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="outerVisible = false">Cancel</el-button>
        <el-button type="primary" @click="innerVisible = true">
          open the inner Dialog
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { fill } from 'lodash';
import { ref, defineExpose } from 'vue'

const data = ref('我是要修改的数据')

const outerVisible = ref(false)
const innerVisible = ref(false)

const dialogShow = (data: any) => {
  console.log(data)
  outerVisible.value = true
}

defineExpose({
  dialogShow,
  data
})
</script>
<style scoped>
.bg-box {
  /* background-image: url('http://localhost:3000/icon/backgroud.png'); */
  background-image: url('assets/backgroud.png');
  width: 640px;
  height: 480px;
  background-size: 610px 480px;
  background-repeat: no-repeat;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}

.el-row {
  margin-bottom: 1px;
  margin-right: 1px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  /* border-radius: 4px; */
  height: 79px;
  /* opacity: 60%; */
}


.toolbar {
  position: absolute;
  right: 315px;
  z-index: 1000;
  top: 15px;
}

.ep-bg-purple {
  /* background-color: purple; */
}

.ep-bg-purple-light {
  /* background-color: darkgreen; */
}

.light-north {
  width: 16px;
  height: 16px;
  float: right;
  top: 60px;

}

.light-pede1 {
  width: 16px;
  height: 16px;
  float: right;
  top: 58px;
  right: 20px;
}

.light-pede2 {
  width: 16px;
  height: 16px;
  float: left;
  top: 58px;
  right: -20px;
}

.light-south {
  width: 16px;
  height: 16px;
  float: left;
  top: 0px;
  right: 0px;
}

.light-spede1 {
  width: 16px;
  height: 16px;
  float: right;
  top: 10px;
  right: 65px;
}

.light-spede2 {
  width: 16px;
  height: 16px;
  float: right;
  top: 10px;
  right: 20px;
}

.light-east {
  width: 16px;
  height: 16px;
  top: -15px;
  right: 0px;
  display: block;
}

.light-wpede2 {
  width: 16px;
  height: 16px;
  float: right;
  top: 48px;
  right: -13px;
}

.light-epede1 {
  width: 16px;
  height: 16px;
  float: left;
  top: 47px;
  right: 20px;
}

.light-west {
  width: 16px;
  height: 16px;
  top: 0px;
  left: 83px;
  display: block;
}

.light-wpede1 {
  width: 16px;
  height: 16px;
  float: right;
  top: 48px;
  right: -13px;
}

.light-epede2 {
  width: 16px;
  height: 16px;
  float: left;
  top: 47px;
  right: 20px;
}
.count-down {
  text-align: right;
    color: rgb(255, 255, 255);
    font-size: 22px;
    top: 70px;
    right: -12px;
    display: block;
    position: relative;
}

.demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.dialog {
  width: 636px;
}
</style>
