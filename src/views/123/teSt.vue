<template>
  <el-button type="primary" @click="add">新增</el-button>
  <addTask v-if="show" :dialogVisible="show" @clickChild="clickEven"></addTask>
</template>

<script setup>
import { ref } from "vue";
import addTask from "../../components/addTask/addTask.vue";
let show = ref(false);
function add() {
  show.value = true;
}
function clickEven() {
  console.log(125);
  show.value = false;
}
</script>
