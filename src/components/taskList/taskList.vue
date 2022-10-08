<script setup>
import { computed } from "vue";
import { useTodosStore } from "../../stores/todos";
import Item from "./taskListItem.vue";
const todos = useTodosStore();
const props = defineProps(["filter", "title", "handleDetailClick"]);
const filteredTodos = computed(() =>
  props.filter(todos.filterTodos()).sort((a, b) => a.date - b.date)
);
function processAlarmText(date) {
  let dateText = new Date(date * 1000).toLocaleDateString();
  let today = new Date().toLocaleDateString();
  let tomorrow = new Date(
    new Date().getTime() + 1000 * 60 * 60 * 24
  ).toLocaleDateString();
  if (dateText == today) return "今天";
  if (dateText == tomorrow) return "明天";
  return dateText;
}
</script>

<template>
  <div class="tasklist">
    <div class="clearfix">
      <div class="list-top">
        <h5>{{ props.title }}</h5>
      </div>
      <el-row class="mb-4">
        <el-button v-if="todos.filter" @click="todos.clearFilter"
          >显示全部</el-button
        >
        <el-button v-else @click="todos.setFilterForUnfinished"
          >显示未完成</el-button
        >
      </el-row>
    </div>

    <ul>
      <Item
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        :alarm-text="processAlarmText(todo.date)"
        :handleDetailClick="props.handleDetailClick"
        >{{ todo.title }}</Item
      >
    </ul>
  </div>
</template>

<style>
.tasklist .el-row {
  float: right;
}
.tasklist ul {
  margin-left: -30px;
  margin-top: 20px;
}
.tasklist {
  width: 500px;
  height: 400px;
}
ul {
  list-style: none;
}
.list-top {
  float: left;
}
.list-top h5 {
  font-weight: 500;
  font-size: 24px;
}
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
.clearfix {
  *zoom: 1;
}
</style>
