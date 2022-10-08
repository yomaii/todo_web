<script setup>
import TheContext from "../components/TheContext.vue";
import date from "date-and-time";
const future = (todos) =>
  todos.filter((todo) => {
    const today = new Date(date.format(new Date(), "YYYY/MM/DD"));
    const todoDate = new Date(todo.date * 1000);
    for (let i = 0; i < 7; i++) {
      if (date.subtract(today, todoDate).toMilliseconds() <= 0) {
        return true;
      }
    }
    return false;
  });
</script>

<template>
  <div class="right1">
    <TheContext :filter="future" :title="`未来计划`"></TheContext>
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
