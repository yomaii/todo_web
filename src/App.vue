<script setup>
import List from "./components/taskList/taskList.vue";
import { useTodosStore } from "./stores/todos";
const todos = useTodosStore();

// let testTask = ['写报告', '吃晚饭', '写论文', '投递简历'];
// let obj = testTask.map((item, index) => {
//   return {id:index, title:item,finished:false};
// });
// console.log(JSON.stringify(obj));
const json =
  '[{"id":0,"title":"写报告","finished":true},{"id":1,"title":"吃晚饭","finished":false},{"id":2,"title":"写论文","finished":false},{"id":3,"title":"投递简历","finished":false}]';
const data = JSON.parse(json);
todos.setTodos(data);
</script>

<template>
  <List :data="data"></List>
</template>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
</style>
