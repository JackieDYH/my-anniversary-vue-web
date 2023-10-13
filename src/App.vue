<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-10-13 17:16:18
 * @LastEditors: Jackie
 * @Description: app
 * @FilePath: /my-anniversary-vue/src/App.vue
 * @version: 
-->
<template>
  <router-view />
</template>
<script setup></script>
<style lang="scss">
#app {
  position: relative;
  /*设置页面大小，以便子元素水平垂直居中*/
  /* width: 100%;
  height: 100vh;
  display: flex; */
  /*水平垂直居中*/
  /* align-items: center;
  justify-content: center;
  background-image: url('@/assets/images/back.jpg');
  background-attachment: fixed;
  background-size: 100% 100%; */

  /*滚动条样式*/
  ::-webkit-scrollbar {
    width: 14px;
    height: 14px;
  }

  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-thumb {
    border-radius: 999px;
    border: 5px solid transparent;
  }

  ::-webkit-scrollbar-track {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2) inset;
  }

  ::-webkit-scrollbar-thumb {
    min-height: 20px;
    background-clip: content-box;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2) inset;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  /*实现暗黑模式，其实就是将颜色反转
html{
  filter: invert(1) hue-rotate(180deg)
}
*/
}
</style>
