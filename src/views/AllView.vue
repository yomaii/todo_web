<script setup>
import TheContext from "../components/TheContext.vue";
const all = (todos) => todos;
</script>
<template>
  <div class="right1">
    <TheContext :filter="all" :title="`所有待办`"></TheContext>
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
