<script setup>
import { computed } from "vue";
import Item from "./taskListItem.vue";
const props = defineProps(["data", "showFinished"]);
const filteredTodos = computed(() => {
  return props.showFinished
    ? props.data.filter((t) => !t.finished)
    : props.data;
});
</script>

<template>
  <ul class="tasklist">
    <Item
      v-for="todo in filteredTodos"
      :key="todo.id"
      :finished="todo.finished"
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
