import { ref } from "vue";
import { defineStore } from "pinia";
const localStorage = window.localStorage;
export const useTodosStore = defineStore("tasks", () => {
  const todos = ref([]);
  const filter = ref((todos) => todos.filter((todo) => !todo.finished));

  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos.value));
  }

  function filterTodos() {
    if (filter.value) {
      return filter.value(todos.value);
    }
    return todos.value;
  }

  function setTodos(t) {
    todos.value = t;
    saveTodos();
  }

  function changeTodoStatus(task) {
    todos.value = todos.value.map((item) => {
      if (item == task) {
        item.finished = !item.finished;
      }
      return item;
    });
    saveTodos();
  }

  function clearFilter() {
    filter.value = null;
  }

  function setFilterForUnfinished() {
    filter.value = (todos) => todos.filter((todo) => !todo.finished);
  }

  function addTodos(todo) {
    todos.value.push(todo);
    saveTodos();
  }

  function deleteTodo(id) {
    todos.value = todos.value.filter((todo) => todo.id != id);
    saveTodos();
  }

  function getAllTypes() {
    const s = new Set();
    for (let todo of todos.value) {
      if (!s.has(todo.type)) {
        s.add(todo.type);
      }
    }
    return [...s];
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
    setFilterForUnfinished,
    getAllTypes,
  };
});
