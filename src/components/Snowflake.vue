<!--
 * @Author: Jackie
 * @Date: 2024-07-10 16:10:00
 * @LastEditTime: 2024-07-10 16:13:56
 * @LastEditors: Jackie
 * @Description: Snowflake
 * @FilePath: /my-anniversary-vue-web/src/components/Snowflake.vue
 * @version: 
-->
<template>
  <div v-for="item of 100" :key="item" class="snowflake"></div>
</template>

<script setup name="Snowflake">
import { ref } from 'vue';
defineOptions({ name: 'Snowflake' });
</script>

<style scoped lang="scss">
.snowflake {
  --size: 5vw;
  width: var(--size);
  height: var(--size);
  background: url('@/assets/images/fy.png') no-repeat;
  background-size: 100% 100%;
  position: fixed;
  top: -5vh;
  z-index: 99;
}

@keyframes snowfall {
  100% {
    transform: translate3d(var(--end), 100vh, 0);
  }
}

@for $i from 0 through 500 {
  .snowflake:nth-child(#{$i}) {
    //每个雪花的大小
    --size: #{random(10) * 0.1}vw;
    //雪花移动目标点 -70后是负数 这样雪花会向左下方飘落
    --end: #{random(20) - 70}vw;
    left: #{random(150)}vw;
    animation: snowfall #{5 + random(8)}s linear infinite;
    animation-delay: -#{random(10)}s;
  }
}
</style>
