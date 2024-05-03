<template>

    <el-icon :size="20" :color="color">
        <component :is="icon"></component>
    </el-icon>

</template>


<script lang='ts' setup>

withDefaults(
    defineProps<{
        icon: string;
        size?:string | number;
        color?:string;
    }>(),
    {
       size:16
    }
)

//   defineProps<{
//     icon:string;
//   }>({
//     icon:"edit",
//   })

</script>


<style lang='scss' scoped></style>