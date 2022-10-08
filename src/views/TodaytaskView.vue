<script setup>
import TheContext from "../components/TheContext.vue";
import date from "date-and-time";
const today = (todos) =>
  todos.filter((todo) => {
    const now = new Date();
    const todoDate = new Date(todo.date * 1000);
    return date.isSameDay(now, todoDate);
  });
</script>
<template>
  <div class="right1">
    <TheContext :filter="today" :title="`今日任务`"></TheContext>
  </div>
</template>

<style>
.right1 {
  width: 80%;
  float: right;
  margin-right: 50px;
}
.is-selected {
  color: #1989fa;
}
p {
  margin: 0;
  padding: 0;
}
#tasklist {
  font-size: 8px;
  margin: 0;
}
</style>
