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
    <div class="right" id="rightwen">
      <Detail :todo="todo" :alarm-text="alarmText"></Detail>
    </div>
  </div>
</template>

<style>
.context {
  margin-top: 80px;
  width: 100%;
  height: 100%;
  color: black;
  display: flex;
}
.left {
  width: 500px;
  height: 100%;
}
.right {
  width: 300px;
  margin-left: 30px;
}
</style>
