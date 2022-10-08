<script setup>
import { computed } from "vue";
import { useTodosStore } from "../../stores/todos";
import Item from "./taskListItem.vue";
import date from "date-and-time";
const todos = useTodosStore();
const props = defineProps(["filter", "title", "handleDetailClick"]);
const filteredTodos = computed(() =>
  props.filter(todos.filterTodos()).sort((a, b) => a.date - b.date)
);
function processAlarmText(d) {
  const todoDate = new Date(d * 1000);
  const today = new Date(date.format(new Date(), "YYYY/MM/DD"));
  if (date.isSameDay(today, todoDate)) return "今天";
  if (date.isSameDay(date.addDays(today, 1), todoDate)) return "明天";
  return date.format(todoDate, "YYYY-MM-DD");
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
