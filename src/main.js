/*
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-08-08 11:34:22
 * @LastEditors: Jackie
 * @Description: main
 * @FilePath: /Wooden-Fish-Vue-Web/src/main.js
 * @version:
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import pinia from '@/store';

// 公共样式
import '@/assets/styles/index.scss';
import '@/utils/AutoResize.js';

createApp(App).use(pinia).use(router).mount('#app');
