/*
 * @Author: Jackie
 * @Date: 2023-07-24 16:34:03
 * @LastEditTime: 2023-10-13 17:05:36
 * @LastEditors: Jackie
 * @Description: user pinia
 * @FilePath: /my-anniversary-vue/src/store/user.js
 * @version:
 */
import { defineStore, storeToRefs } from 'pinia';
import { toRefs, ref, reactive, computed } from 'vue';

export const useUserStore = defineStore(
  'user',
  () => {
    // 状态
    const state = reactive({
      name: 'jackie',
      age: 18
    });
    const merit = ref(0);

    // 计算
    const getMerit = computed(() => merit.value);
    const Age = computed(() => `年龄：${state.age}-${state.age}岁`);

    // 修改
    const setName = (name) => (state.name = name);
    const setAge = (age) => (state.age += age);
    const setMerit = (m) => (merit.value += m);

    return {
      ...toRefs(state),
      merit,
      Age,
      getMerit,
      setName,
      setAge,
      setMerit
    };
  },
  {
    persist: {
      enabled: true, // 开启缓存  默认会存储在本地localstorage
      storage: sessionStorage, // 缓存使用方式
      paths: [] // 需要缓存键
    }
  }
);
