<script setup>
import { useTodosStore } from "./stores/todos";
//import TheContext from "./components/TheContext.vue";
const todos = useTodosStore();

// let testTask = ['写报告', '吃晚饭', '写论文', '投递简历'];
// let obj = testTask.map((item, index) => {
//   return {id:index, title:item, finished:false, date:1664985600, repeate: false, describe:'测试描述文本', type:'测试类别'};
// });
// console.log(JSON.stringify(obj));
const json =
  '[{"id":0,"title":"写报告","finished":false,"date":1665129964,"repeate":false,"describe":"测试描述文本","type":"测试类别"},{"id":1,"title":"吃晚饭","finished":false,"date":1664985600,"repeate":false,"describe":"测试描述文本","type":"测试类别"},{"id":2,"title":"写论文","finished":false,"date":1664985600,"repeate":false,"describe":"测试描述文本","type":"测试类别"},{"id":3,"title":"投递简历","finished":false,"date":1664985700,"repeate":false,"describe":"测试描述文本","type":"测试类别"}]';
const data = JSON.parse(json);
todos.setTodos(data);
</script>

<template>
  <router-view />
  <!-- <TheContext></TheContext> -->
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
