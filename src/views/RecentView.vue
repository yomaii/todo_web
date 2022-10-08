<script setup>
import TheContext from "../components/TheContext.vue";
import date from "date-and-time";
const recent = (todos) =>
  todos.filter((todo) => {
    const today = new Date(date.format(new Date(), "YYYY/MM/DD"));
    const todoDate = new Date(todo.date * 1000);
    const sub = date.subtract(todoDate, today).toDays();
    if (sub >= 0 && sub < 7) {
      return true;
    }
    return false;
  });
</script>
<template>
  <div class="right1">
    <TheContext :filter="recent" :title="`最近待办`"></TheContext>
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
