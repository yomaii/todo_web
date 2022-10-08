<script setup>
import { Check, AlarmClock, Delete } from "@element-plus/icons-vue";
import { useTodosStore } from "../../stores/todos";
const todos = useTodosStore();
const props = defineProps(["todo", "alarmText", "handleDetailClick"]);
</script>

<template>
  <li>
    <div class="tasklist-item">
      <div class="tasklist-btn" @click="todos.changeTodoStatus(props.todo)">
        <el-button v-if="props.todo.finished" :icon="Check" circle />
        <el-button v-else circle><i class="el-icon"></i></el-button>
      </div>
      <div class="tasklist-item-textbox">
        <span class="tasklist-title">
          <a @click="props.handleDetailClick(todo, props.alarmText)">
            <s v-if="props.todo.finished"><slot></slot></s>
            <slot v-else></slot>
          </a>
        </span>
        <div class="actions">
          <a @click="todos.deleteTodo(todo.id)"
            ><el-icon><Delete /></el-icon
          ></a>
        </div>
        <div class="alarm" v-if="props.todo.date">
          <el-icon><AlarmClock /></el-icon>
          <span style="margin-left: 5px">{{ props.alarmText }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<style>
.tasklist-item {
  height: 40px;
  line-height: 40px;
  width: 100%;
  display: flex;
  overflow: hidden;
}
.tasklist-item-textbox {
  width: 100%;
  border-bottom: gray 1px solid;
  padding-left: 10px;
}
.tasklist-item-textbox .alarm {
  float: right;
}
.tasklist-item-textbox .actions {
  float: right;
  margin-left: 20px;
}
.tasklist-item a {
  color: black;
}
.tasklist-item a:hover {
  background: none;
  cursor: pointer;
}
</style>
