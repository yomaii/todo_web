<template>
  <div class="left1" id="left1">
    <router-link to="/todaytask">
      <div style="height: 20px; width: 20px; margin-right: 20px">
        <el-icon :size="20">
          <Sunny />
        </el-icon>
      </div>
      <span>今日任务</span>
    </router-link>
    <router-link to="/daiban">
      <div style="height: 20px; width: 20px; margin-right: 20px">
        <el-icon :size="20">
          <Edit />
        </el-icon>
      </div>
      <span>最近待办</span>
    </router-link>
    <router-link to="/calender">
      <div style="height: 20px; width: 20px; margin-right: 20px">
        <el-icon :size="20">
          <Calendar />
        </el-icon>
      </div>
      <span>日程概览</span>
    </router-link>
    <!--         <div class="list3" @click="goCalender">
           
        </div> -->
    <router-link to="/nextplan">
      <el-icon :size="20" style="margin-right: 20px">
        <Guide />
      </el-icon>
      <span>未来计划</span>
    </router-link>
    <router-link to="/fenlei">
      <el-icon :size="20" style="margin-right: 20px">
        <List />
      </el-icon>
      <span>任务分类</span>
    </router-link>
  </div>
</template>
<script>
import { onMounted } from "vue";
import emitter from "../untils/eventBus";
export default {
  setup() {
    onMounted(() => {
      emitter.on("hidelist", () => {
        console.log("456");
      });
    });
    /*      function hidelist(){
            console.log('456')
        }
        return {
            hidelist
        } */
  },
};
</script>

<style>
.left1 {
  float: left;
  margin-top: 20px;
  color: black;
  width: 15%;
  height: 100%;
  transition: all 0.1s;
}

.left1 > a {
  color: black;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.left1 > div:hover {
  background-color: bisque;
}
</style>
