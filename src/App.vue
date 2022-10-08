<script setup>
import { RouterView } from "vue-router";
import HeaderName from "./components/HeaderName.vue";
import LeftList from "./components/LeftList.vue";
</script>

<template>
  <div>
    <HeaderName></HeaderName>
    <div>
      <LeftList></LeftList>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
