<template>
<el-container class="layout-container">
      <LayoutAside></LayoutAside>
      <el-container direction="vertical">
        <LayoutHeader></LayoutHeader>
        <LayoutMain></LayoutMain>
      </el-container>
    </el-container>

</template>


<script lang='ts' setup>
import { defineAsyncComponent } from 'vue';
// 侧边栏组件
const LayoutAside= defineAsyncComponent(()=>import("./layoutAside/index.vue"))
// 头部组件
const LayoutHeader= defineAsyncComponent(()=>import("./layoutHeader/index.vue"))
// 内容组件
const LayoutMain= defineAsyncComponent(()=>import("./layoutMain/index.vue"))

</script>


<style lang='scss' scoped>


</style>