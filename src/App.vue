<script setup>
import { RouterView } from "vue-router";
import HeaderName from "./components/HeaderName.vue";
import LeftList from "./components/LeftList.vue";
import { useTodosStore } from "./stores/todos";
const todos = useTodosStore();
/*
let testTask = ["写报告", "吃晚饭", "写论文", "投递简历"];
let obj = testTask.map((item, index) => {
  return {
    id: index,
    title: item,
    finished: false,
    date: 1664985600,
    repeate: false,
    describe: "测试描述文本",
    type: "测试类别",
  };
});
console.log(JSON.stringify(obj));
*/
if (window.localStorage.getItem("todos")) {
  todos.setTodos(JSON.parse(window.localStorage.getItem("todos")));
} else {
  const json =
    '[{"id":0,"title":"写报告","finished":false,"date":1665206907,"repeate":false,"describe":"测试描述文本","type":"测试类别1"},{"id":1,"title":"吃晚饭","finished":false,"date":1665294080,"repeate":false,"describe":"测试描述文本","type":"测试类别2"},{"id":2,"title":"写论文","finished":false,"date":1664985600,"repeate":false,"describe":"测试描述文本","type":"测试类别1"},{"id":3,"title":"投递简历","finished":false,"date":1664985700,"repeate":false,"describe":"测试描述文本","type":"测试类别3"}]';
  const data = JSON.parse(json);
  todos.setTodos(data);
}
</script>

<template>
  <div>
    <HeaderName></HeaderName>
    <div>
      <LeftList></LeftList>
      <RouterView></RouterView>
    </div>
  </div>
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
