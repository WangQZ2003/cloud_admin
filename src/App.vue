<!-- <script setup lang="ts">
import { RouterView } from 'vue-router' 
import {test} from "./api/test"

const hand= async ()=>{
  // const res = await axios.request({
  //   url:"https://mock.mengxuegu.com/mock/6638c421cab9671f88bd3159/v/focus",
  //   method:"GET"
  // });
  // console.log("Res==>",res);
  
  const res = await test();
  console.log(res);
}


// import { h } from "vue"

// // type props  children
// const vnode = h("div", { class: "test" }, ["8888", h("span", "45621")])

</script>

<!-- <template> -->

  <!-- <vnode></vnode> -->

  <!-- <SvgIcon icon="Edit" size="20" color="red" @click="hand"/> -->

  <!-- 
  <div>111</div>
  <el-button type="primary">1</el-button>
  <el-button type="danger">2</el-button>
  <Edit style="width: 1em; height: 1em; margin-right: 8px" />
  <Share style="width: 1em; height: 1em; margin-right: 8px" />
  <Delete style="width: 1em; height: 1em; margin-right: 8px" />
  <Search style="width: 1em; height: 1em; margin-right: 8px" /> -->


  <!-- 想当与 用虚拟节点表示div -->
  <!-- <div id="hello"></div> -->
  <!-- const vnode = {
  type:"div",
  props:{
    id:"hello"
  },
  children:[
  ]
} -->
  <!-- 常规封装  render封装  jsx

<svg-icon icon="elid" size="" color=""></svg-icon> -->

  <!-- <RouterView />
</template> -->

<!-- <style scoped lang="scss">

</style> --> -->



<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style scoped lang="scss"></style>