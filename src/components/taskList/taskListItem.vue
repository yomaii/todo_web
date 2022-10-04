<script setup>
import { Check } from "@element-plus/icons-vue";
const props = defineProps(["finished"]);
</script>

<template>
  <li>
    <div class="tasklist-item">
      <div class="tasklist-btn">
        <el-button v-if="props.finished" :icon="Check" circle />
        <el-button v-else circle><i class="el-icon"></i></el-button>
      </div>
      <div class="tasklist-item-textbox">
        <span class="tasklist-title">
          <s v-if="props.finished"><slot></slot></s>
          <slot v-else></slot>
        </span>
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
</style>
