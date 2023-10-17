<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-10-17 17:38:53
 * @LastEditors: Jackie
 * @Description: home
 * @FilePath: /my-anniversary-vue/src/views/Home.vue
 * @version: 
-->
<template>
  <div class="home">
    <HeadTop />
    <TableList />
  </div>
</template>

<script setup>
import HeadTop from '@/components/HeadTop.vue';
import TableList from '@/components/TableList.vue';
</script>

<style lang="scss" scoped>
.home {
}

@keyframes run {
  from {
    transform: rotateZ(30deg);
  }

  to {
    transform: rotateZ(12deg);
  }
}
</style>
