<!--
 * @Author: Jackie
 * @Date: 2023-08-07 18:21:45
 * @LastEditTime: 2023-08-09 20:11:19
 * @LastEditors: Jackie
 * @Description: 导航
 * @FilePath: /Wooden-Fish-Vue-Web/src/components/NavBar.vue
 * @version: 
-->
<template>
  <div class="total">功德：{{ merit }}</div>
  <!-- -{{ meritValue }}-{{ getMerit }} -->
  <div class="navbar">
    <img src="@/assets/images/muyu.png" class="but" @click="goPath('/')" />
    <img
      src="@/assets/images/shaoxiang.png"
      class="but"
      @click="goPath('/shaoxiang')"
    />
    <img
      src="@/assets/images/qiuqian.png"
      class="but"
      @click="goPath('/qiuqian')"
    />
    <img src="@/assets/images/yinyue.png" class="but" @click="music" />
  </div>
  <!--背景音乐大悲咒-->
  <audio id="bgmusic" ref="audioElement">
    <source src="@/assets/music/3.mp3" />
  </audio>
</template>

<script setup>
import { onMounted, computed, reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
const router = useRouter();
const userStore = useUserStore();
const { merit, getMerit } = storeToRefs(userStore);

const meritValue = computed(() => getMerit); //userStore.getMerit

const isAudio = ref(false);
const audioElement = ref(null);
// 控制音乐播放和暂停
const music = () => {
  //   userStore.setMerit(20);
  isAudio.value = !isAudio.value;
  if (isAudio.value) {
    audioElement.value.play();
  } else {
    audioElement.value.pause();
  }
};
const goPath = (path) => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
.total {
  color: #909090;
  position: absolute;
  bottom: 200px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 24px;
}

.navbar {
  display: flex;
  /*水平垂直居中*/
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translate(-50%, 0);
  .but {
    width: 50px;
    height: 120px;
    margin: 0 30px;
    cursor: pointer;
    &:hover {
      width: 60px;
      height: 120px;
      margin: 0 25px;
    }
    &:active {
      width: 50px;
      height: 120px;
      margin: 0 30px;
    }
  }
}
</style>
