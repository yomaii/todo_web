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

  function addTodos(todo) {
    todos.value.push(todo);
    console.log(todo, todos.value);
  }

  function deleteTodo(id) {
    todos.value = todos.value.filter((todo) => todo.id != id);
  }

  return {
    todos,
    filterTodos,
    filter,
    setTodos,
    addTodos,
    deleteTodo,
    changeTodoStatus,
    clearFilter,
  };
});
