<script setup>
import { ref } from "vue";
import { useTodosStore } from "../stores/todos";
import date from "date-and-time";
const todos = useTodosStore();
const filteredTodos = ref([]);
filteredTodos.value = todos.filterTodos().sort((a, b) => a.date - b.date);

const hasTodo = (d) => {
  const targetDate = new Date(d);
  for (let todo of filteredTodos.value) {
    if (date.isSameDay(new Date(todo.date * 1000), targetDate)) {
      return true;
    }
  }
  return false;
};
const getTodosByDate = (d) => {
  const targetDate = new Date(d);
  let res = [];
  for (let todo of filteredTodos.value) {
    if (date.isSameDay(new Date(todo.date * 1000), targetDate)) {
      if (res.length < 2) {
        res.push(todo);
      } else {
        res.push({ title: "...", id: -1 });
        break;
      }
    }
  }
  return res;
};
</script>
<template>
  <div class="right1">
    <el-calendar>
      <template #date-cell="{ data }">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split("-").slice(1).join("-") }}
        </p>
        <ul id="tasklist" v-show="hasTodo(data.day)" ref="tasklist">
          <li v-for="todo in getTodosByDate(data.day)" :key="todo.id">
            {{ todo.title }}
          </li>
        </ul>
      </template>
    </el-calendar>
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
