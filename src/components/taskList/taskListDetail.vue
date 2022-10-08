<script setup>
import { onMounted, onUpdated } from "vue";
import { Folder, AlarmClock } from "@element-plus/icons-vue";
const props = defineProps(["todo", "alarmText"]);
function isShow() {
  const s = document.getElementById("props");
  if (s) {
    document.getElementById("task-detailw").style.display = "block";
  } else {
    document.getElementById("task-detailw").style.display = "none";
  }
}
onMounted(() => {
  isShow();
});
onUpdated(() => {
  isShow();
});
</script>
<template>
  <div class="task-detail" id="task-detailw">
    <div class="title">
      <h5>{{ props.todo.title }}</h5>
    </div>
    <div class="props" v-if="todo" id="props">
      <el-icon><Folder /></el-icon>
      <span style="margin-left: 5px">{{ props.todo.type }}</span>
      <el-icon><AlarmClock /></el-icon>
      <span style="margin-left: 5px">{{ props.alarmText }}</span>
    </div>
    <div class="detail">
      <p>{{ props.todo.describe }}</p>
    </div>
  </div>
</template>

<style>
.task-detail {
  padding: 10px;
  padding-left: 30px;
  width: 300px;
  border: 3px solid salmon;
  border-radius: 10px;
  transform: all 3s linear 0.5s;
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
