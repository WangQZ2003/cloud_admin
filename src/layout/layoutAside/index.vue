<template>
    <!-- 展开的时候 200px 收起的时候 60px -->
    <el-aside class="layout-aside" width="200px">
        <!-- logo -->
        <Logo></Logo>
        <!-- 菜单 -->
        <Menu></Menu>
      </el-aside>
    
    </template>
    
    
    <script lang='ts' setup>
    import { defineAsyncComponent } from 'vue';
    
    const Logo = defineAsyncComponent(()=>import("./Logo.vue"))
    const Menu = defineAsyncComponent(()=>import("./Menu.vue"))
    
    
    </script>
    
    
    <style lang='scss' scoped>
    
    
    </style>