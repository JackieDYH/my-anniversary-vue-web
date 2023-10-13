/*
 * @Author: Jackie
 * @Date: 2023-08-07 18:13:54
 * @LastEditTime: 2023-10-13 17:05:03
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /my-anniversary-vue/src/utils/index.js
 * @version:
 */
/**
 * delay 延迟
 * @param {*} time
 * @returns
 */
export function delay(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

// 防抖
export function debounce(func, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}
// 节流
export function throttle(func, delay) {
  let canRun = true;
  return function (...args) {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      func.apply(this, args);
      canRun = true;
    }, delay);
  };
}
