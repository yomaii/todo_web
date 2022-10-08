<script setup>
import { onMounted, computed } from "vue";
import emitter from "../untils/eventBus";
import { useTodosStore } from "../stores/todos";

const todos = useTodosStore();
const types = computed(() => todos.getAllTypes());

onMounted(() => {
  emitter.on("hidelist", () => {
    console.log("456");
  });
});
/*
function hidelist(){
        console.log('456')
    }
    return {
        hidelist
    }
}
*/
</script>
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
    <router-link to="/recent">
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
    <router-link to="/future">
      <el-icon :size="20" style="margin-right: 20px">
        <Guide />
      </el-icon>
      <span>未来计划</span>
    </router-link>
    <router-link to="">
      <el-icon :size="20" style="margin-right: 20px">
        <List />
      </el-icon>
      <span>任务分类</span>
    </router-link>
    <router-link
      v-for="type in types"
      :to="{ path: `/type/${type}` }"
      :key="types.indexOf(type)"
    >
      <span>{{ type }}</span>
    </router-link>
  </div>
</template>

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
