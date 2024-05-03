<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div>111</div>
  <el-button type="primary">1</el-button>
  <el-button type="danger">2</el-button>
  <Edit style="width: 1em; height: 1em; margin-right: 8px" />
    <Share style="width: 1em; height: 1em; margin-right: 8px" />
    <Delete style="width: 1em; height: 1em; margin-right: 8px" />
    <Search style="width: 1em; height: 1em; margin-right: 8px" />
  <RouterView />
</template>

<style scoped lang="scss">
div{
  background-color: red;
  width: 200px;
  height: 200px;
}
</style>
