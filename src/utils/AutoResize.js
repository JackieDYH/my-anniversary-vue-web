/*
 * @Author: Jackie
 * @Date: 2023-08-07 18:15:18
 * @LastEditTime: 2023-10-13 17:15:06
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /my-anniversary-vue/src/utils/AutoResize.js
 * @version:
 */
import router from '@/router/index.js';

let BaseSize = 16;
const minWidth = 375;
let RouterAutoResize = {
  enable: true,
  config: [
    {
      maxWidth: 1024,
      baseSize: 32
    },
    {
      maxWidth: 430,
      baseSize: 48
    }
  ]
};
document.documentElement.style.minWidth = `${minWidth}px`;
function setWindowBasicSize() {
  // console.log('window resize');
  let baseSize = BaseSize;
  const width =
    document.documentElement.clientWidth > minWidth
      ? document.documentElement.clientWidth
      : minWidth;
  if (RouterAutoResize && RouterAutoResize.enable) {
    RouterAutoResize.config.every((config) => {
      if (width <= config.maxWidth) {
        baseSize = config.baseSize;
        return true;
      }
    });
  }
  const scale = width / 1920;

  const rem2pxRatio = baseSize * Math.min(scale, 2);
  document.documentElement.style.fontSize = `${rem2pxRatio}px`;
  // 如果需要固定高度，则可使用以下代码
  // const height = document.documentElement.clientHeight > scale * minWidth ? document.documentElement.clientHeight : scale * minWidth
  // document.documentElement.style.height = height + 'px'
  if (width <= 1024) {
    // let dpr = window.devicePixelRatio || 1
    // let scale = 1 / dpr
    // let vp = document.querySelector('meta[name="viewport"]')
    // vp.setAttribute('content', 'width=' + dpr * document.documentElement.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no')
    let vp = document.querySelector('meta[name="viewport"]');
    vp.setAttribute(
      'content',
      'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0'
    );
  }
}
setWindowBasicSize();
window.addEventListener('resize', setWindowBasicSize);
router.afterEach((to, from) => {
  // RouterAutoResize = to.meta.autoResize
  setWindowBasicSize();
});
