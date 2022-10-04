import { ref } from "vue";
import { defineStore } from "pinia";

export const useTodosStore = defineStore("tasks", () => {
  const todos = ref([]);
  const filter = ref(null);

  function filterTodos() {
    if (filter.value) {
      return filter.value(todos.value);
    }
    return todos.value;
  }

  function setTodos(t) {
    todos.value = t;
  }

  function changeTodoStatus(task) {
    todos.value = todos.value.map((item) => {
      if (item == task) {
        item.finished = !item.finished;
      }
      return item;
    });
  }

  function clearFilter() {
    filter.value = null;
  }
  return {
    todos,
    filterTodos,
    filter,
    setTodos,
    changeTodoStatus,
    clearFilter,
  };
});
