<!--
 * @Author: Jackie
 * @Date: 2023-10-17 17:32:40
 * @LastEditTime: 2024-07-10 16:13:25
 * @LastEditors: Jackie
 * @Description: 顶部时间显示区域
 * @FilePath: /my-anniversary-vue-web/src/components/HeadTop.vue
 * @version: 
-->
<template>
  <div class="headtop">
    <p class="time">{{ T }}</p>
    <p class="date">{{ D }} {{ W }}</p>
    <div class="topbg"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
defineOptions({ name: 'HeadTop' });
import dayjs from 'dayjs';

let Times = '';
const D = ref('');
const T = ref('');
const W = ref('');
const week = ['日', '一', '二', '三', '四', '五', '六'];
const getDateTime = () => {
  const day = dayjs().format('YYYY-MM-DD HH:mm:ss').split(' ');
  const day2 = dayjs().day();
  D.value = day[0];
  T.value = day[1];
  W.value = '星期' + week[day2];
  // console.log(day);
};

onMounted(() => {
  if (Times) {
    clearInterval(Times);
  }
  Times = setInterval(() => {
    getDateTime();
  }, 1000);
});
onUnmounted(() => {
  clearInterval(Times);
});
</script>
<style lang="scss" scoped>
.headtop {
  position: relative;
  z-index: 10;
  user-select: none;
  --wallpaper-blur: 0.5px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Inter, Helvetica, Arial, sans-serif;
  .time {
    color: rgb(255, 255, 255);
    line-height: 120px;
    font-size: 160px;
    padding-bottom: 16px;
    text-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }
  .date {
    padding-bottom: 16px;
    vertical-align: baseline;
    font-size: 40px;
    color: #fff;
    line-height: 1.5;
  }
  .topbg {
    filter: blur(0.5px);
    background: url('@/assets/images/th.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    width: 100%;
    height: 100%;

    position: absolute;
    z-index: -1;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      user-select: none;
      pointer-events: none;
      z-index: 3;
      opacity: 0.2;
      width: 100%;
      height: 100%;
      background: radial-gradient(transparent 50%, black), linear-gradient(transparent, black);
    }
    /* display: block;
      opacity: 1;
      transition: background-image 0.3s, background-color 0.3s;
      transition-timing-function: ease; */
    /* bottom: calc(var(--wallpaper-blur) * -2);
      left: calc(var(--wallpaper-blur) * -2);
      right: calc(var(--wallpaper-blur) * -2);
      top: calc(var(--wallpaper-blur) * -2); */
  }
}
</style>
