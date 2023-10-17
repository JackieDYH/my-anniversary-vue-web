<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-10-17 15:38:12
 * @LastEditors: Jackie
 * @Description: home
 * @FilePath: /my-anniversary-vue/src/views/Home.vue
 * @version: 
-->
<template>
  <div class="home">1123</div>
  <el-button type="primary">Primary</el-button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

onMounted(() => {});
onUnmounted(() => {});
</script>

<style lang="scss" scoped>
@keyframes run {
  from {
    transform: rotateZ(30deg);
  }

  to {
    transform: rotateZ(12deg);
  }
}
</style>
