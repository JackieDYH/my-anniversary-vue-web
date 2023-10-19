<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-10-19 16:36:24
 * @LastEditors: Jackie
 * @Description: home
 * @FilePath: /my-anniversary-vue/src/views/Home.vue
 * @version: 
-->
<template>
  <div class="home">
    <HeadTop />
    <LockBox v-if="isShow" @showBtn="showBtnFun" />
    <TableList v-else @showBtn="showBtnFun" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeadTop from '@/components/HeadTop.vue';
import TableList from '@/components/TableList.vue';
import LockBox from '@/components/LockBox.vue';
const isShow = ref(true);
const showBtnFun = () => {
  isShow.value = !isShow.value;
};
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
