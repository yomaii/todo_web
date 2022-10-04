<script setup>
import { computed } from "vue";
import { useTodosStore } from "../../stores/todos";
import Item from "./taskListItem.vue";
const todos = useTodosStore();
let filteredTodos = computed(() => todos.filterTodos());
function setFilterForUnfinished() {
  todos.filter = (todos) => todos.filter((todo) => !todo.finished);
}
</script>

<template>
  <ul class="tasklist">
    <el-row class="mb-4">
      <el-button v-if="todos.filter" @click="todos.clearFilter"
        >显示全部</el-button
      >
      <el-button v-else @click="setFilterForUnfinished">显示未完成</el-button>
    </el-row>
    <Item
      v-for="todo in filteredTodos"
      :key="todo.id"
      :finished="todo.finished"
      @click="todos.changeTodoStatus(todo)"
      >{{ todo.title }}</Item
    >
  </ul>
</template>

<style>
.tasklist {
  width: 500px;
  height: 400px;
}
ul {
  list-style: none;
}
</style>
