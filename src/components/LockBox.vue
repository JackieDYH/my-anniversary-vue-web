<!--
 * @Author: Jackie
 * @Date: 2023-10-19 16:23:19
 * @LastEditTime: 2024-07-10 16:13:35
 * @LastEditors: Jackie
 * @Description: Lock 校验页面
 * @FilePath: /my-anniversary-vue-web/src/components/LockBox.vue
 * @version: 
-->
<template>
  <div class="look">
    <div class="poster">
      <h1>
        <span class="prefix-text">S</span>
        TAND BY M
        <span class="suffix-text">E</span>
      </h1>
      <h4 class="sub-title">DORAEMON - JackieDYH</h4>
      <div class="doraemon">
        <!-- 脸部 -->
        <div class="header"></div>
        <div class="face"></div>
        <!-- 眼睛部分 -->
        <div class="eye eye-left">
          <div class="pupil">
            <div class="pupil-mask"></div>
            <div class="pupil-middle"></div>
            <div class="pupil-small"></div>
            <div class="tear-top"></div>
            <div class="tear-bottom"></div>
          </div>
        </div>
        <div class="eye eye-right mirror">
          <div class="pupil mirror" @click="showEye">
            <div class="pupil-mask"></div>
            <div class="pupil-middle"></div>
            <div class="pupil-small"></div>
            <div class="tear-top"></div>
            <div class="tear-bottom"></div>
          </div>
        </div>
        <!-- 鼻子部分 -->
        <div class="nose">
          <div class="blink"></div>
        </div>
        <!-- 胡子部分 -->
        <div class="beard beard-left">
          <div class="beard-line-top"></div>
          <div class="beard-line-middle"></div>
          <div class="beard-line-bottom"></div>
        </div>
        <div class="beard beard-right mirror">
          <div class="beard-line-top"></div>
          <div class="beard-line-middle"></div>
          <div class="beard-line-bottom"></div>
        </div>
        <!-- 嘴巴部分 -->
        <div class="mouth"></div>
        <div class="mouth-cover"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
defineOptions({ name: 'LockBox' });
const emits = defineEmits(['showBtn']);
const num = ref(0);
const showEye = () => {
  num.value++;
  // console.log('点击了眼睛');
  if (num.value == 6) {
    emits('showBtn');
  }
};
</script>

<style lang="scss" scoped>
.look {
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  padding: 20px 0;
  min-height: 100vh;

  .poster {
    position: relative;
    width: 480px;
    height: 680px;
    background: #fff;
    margin: 0 auto;
    border: 1px solid #eee;
    text-align: center;
    padding-top: 70px;

    animation-name: fadein;
    animation-duration: 3s;
    animation-delay: 0;
    animation-timing-function: ease-in-out;
  }

  .poster:before {
    content: '';
    position: absolute;
    left: -151px;
    bottom: 0;
    z-index: 10;
    width: 480px;
    height: 680px;
    border-left: 150px solid #fff;
    border-right: 150px solid #fff;
  }

  .poster:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: -201px;
    z-index: 10;
    width: 480px;
    height: 200px;
    background: #fff;
  }

  .prefix-text,
  .suffix-text {
    font-size: 50px;
    vertical-align: top;
  }

  .sub-title {
    margin-top: -50px;
  }

  h1,
  h4 {
    color: #5087b8;
  }

  .doraemon {
    width: 100%;
    height: 350px;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .header {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    background: #5087b8;
    width: 700px;
    height: 350px;
    border-radius: 350px 350px 0 0 / 350px 350px 0 0;
  }

  .face {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%);
    width: 600px;
    height: 250px;
    background: #fff;
    border-radius: 300px 300px 0 / 225px 225px 0 0;
  }

  .eye {
    position: absolute;
    top: 38px;
    width: 136px;
    height: 136px;
    border-radius: 100px 60px 100px 70px / 100px 60px 100px 70px;
    border: 2px solid #7f888f;
    background: #fff;
    z-index: 11;
  }

  .eye.eye-left {
    left: 104px;
  }

  .eye.eye-right {
    right: 104px;
  }

  .mirror {
    transform: rotateY(180deg); // 水平翻转
  }

  .pupil {
    position: absolute;
    top: 60px;
    left: 77px;
    width: 33px;
    height: 33px;
    background: #a0834b;
    border: 1px solid #000;
    border-radius: 50%;
  }

  .pupil-mask {
    position: relative;
    z-index: 1;
    width: 32px;
    height: 17px;
    border-radius: 32px 32px 0 0;
    background: #000;
    opacity: 90%;
    box-shadow: 0 3px rgb(0 0 0 / 75%);
  }

  .pupil-middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: #a0834b;
    border: 1px solid #000;
    border-radius: 50%;
  }

  .pupil-small {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
    background: #000;
    border-radius: 50%;
  }

  .tear-top {
    position: absolute;
    top: 2px;
    left: 4px;
    z-index: 2;
    width: 20px;
    height: 10px;
    background: #fff;
    border-radius: 10px / 8px 8px 6px 5px;
    transform: rotate(-10deg);
  }

  .tear-bottom {
    position: absolute;
    top: 14px;
    left: 7px;
    z-index: 2;
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
  }

  .nose {
    position: absolute;
    top: 127px;
    left: 50%;
    transform: translate(-50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #ae3537;
    box-shadow: 2px 30px 18px -8px rgb(0 0 0 / 33%);
    z-index: 12;
  }

  /* 鼻子上的光 */
  .nose .blink {
    position: absolute;
    top: 5px;
    left: 20px;
    width: 36px;
    height: 22px;
    background: #bf5d5c;
    border-radius: 80px 30px 44px 20px / 60px 30px 60px 20px;
  }

  .beard {
    position: absolute;
    bottom: 0;
    z-index: 10;
    width: 140px;
    height: 200px;
  }

  .beard-left {
    left: 0;
  }

  .beard-right {
    right: 0;
  }

  .beard-line-top,
  .beard-line-middle,
  .beard-line-bottom {
    width: 135px;
    height: 2px;
    border-radius: 2px;
    background: #434f4f;
  }

  .beard-line-top {
    position: absolute;
    top: 25px;
    left: 5px;
    transform: rotate(23deg);
  }

  .beard-line-middle {
    position: absolute;
    top: 85px;
    transform: rotate(8deg);
  }

  .beard-line-bottom {
    position: absolute;
    top: 150px;
    transform: rotate(170deg);
  }

  .mouth {
    position: absolute;
    top: 272px;
    left: 15px;
    width: 450px;
    height: 230px;
    border-radius: 0px 0px 230px 230px;
    background: #9da8a9;
    box-shadow: 0px 18px 7px -2px rgb(0 0 0 / 35%);
  }

  .mouth:after {
    content: '';
    position: absolute;
    top: -65px;
    left: 50%;
    transform: translate(-50%);
    width: 1px;
    height: 140px;
    background: rgb(0 0 0 / 15%);
    z-index: 11;
  }

  .mouth-cover {
    position: absolute;
    top: 262px;
    left: 13px;
    width: 454px;
    height: 230px;
    border-radius: 0px 0px 230px 230px;
    background: #fff;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
}
</style>
