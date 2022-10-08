<script setup>
import { ref } from "vue";
import List from "./taskList/taskList.vue";
import Detail from "./taskList/taskListDetail.vue";
const props = defineProps(["filter", "title"]);
let todo = ref(false);
let alarmText = ref("");
const handleDetailClick = (t, a) => {
  todo.value = t;
  alarmText.value = a;
};
</script>

<template>
  <div class="context">
    <div class="left">
      <List
        :filter="props.filter"
        :title="props.title"
        :handleDetailClick="handleDetailClick"
      ></List>
    </div>
    <div class="right">
      <Detail :todo="todo" :alarm-text="alarmText"></Detail>
    </div>
  </div>
</template>

<style>
.context {
  height: 100%;
  color: black;
}
.left {
  float: left;
  width: 500px;
  height: 100%;
}
.right {
  margin-left: 500px;
  width: 300px;
  height: 100%;
}
</style>
