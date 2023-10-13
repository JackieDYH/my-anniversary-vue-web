/*
 * @Author: Jackie
 * @Date: 2023-08-07 18:51:04
 * @LastEditTime: 2023-10-13 17:05:42
 * @LastEditors: Jackie
 * @Description: store pinia
 * @FilePath: /my-anniversary-vue/src/store/index.js
 * @version:
 */
import { createPinia } from 'pinia';
// 数据持久化
import piniaPluginPersist from 'pinia-plugin-persist';

const pinia = createPinia();

pinia.use(piniaPluginPersist);

// 为了解决setup语法下不支持 .$reset() 方法的问题
pinia.use(({ store }) => {
  const initialState = JSON.parse(JSON.stringify(store.$state));
  store.$reset = () => {
    store.$state = JSON.parse(JSON.stringify(initialState));
  };
});

export default pinia;
