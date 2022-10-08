<script setup>
import TheContext from "../components/TheContext.vue";
const props = defineProps(["type"]);
const filterType = (todos) => todos.filter((todo) => todo.type === props.type);
</script>
<template>
  <div class="right1">
    <TheContext :filter="filterType" :title="props.type"></TheContext>
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
