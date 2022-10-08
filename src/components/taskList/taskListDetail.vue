<script setup>
import { Folder, AlarmClock } from "@element-plus/icons-vue";
const props = defineProps(["todo", "alarmText"]);
</script>

<template>
  <div class="task-detail">
    <div class="title">
      <h5>{{ props.todo.title }}</h5>
    </div>
    <div class="props" v-if="todo">
      <el-icon><Folder /></el-icon>
      <span>{{ props.todo.type }}</span>
      <el-icon><AlarmClock /></el-icon>
      <span>{{ props.alarmText }}</span>
    </div>
    <div class="detail">
      <p>{{ props.todo.describe }}</p>
    </div>
  </div>
</template>

<style>
.task-detail {
  margin-top: 50px;
  margin-left: 30px;
  width: 300px;
}
.title h5 {
  font-weight: 700;
  font-size: 20px;
}
.task-detail .props {
  margin: 20px 0px 20px 0px;
}
.task-detail .props span {
  margin-right: 20px;
}
</style>
