<script setup></script>
<template>
  <div class="right1">
    <el-calendar>
      <template #date-cell="{ data }">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split("-").slice(1).join("-") }}
          {{ data.isSelected ? "✔️" : "" }}
        </p>
        <ul
          id="tasklist"
          v-show="data.isSelected ? true : false"
          ref="tasklist"
        >
          <li>吃饭</li>
          <li>看电影</li>
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
