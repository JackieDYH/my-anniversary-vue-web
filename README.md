# my-anniversary-vue-web - 我的纪念日倒计时 Vue3 Web 版本 - By JackieDYH 202310

- [在线体验 👀](https://jackiedyh.github.io/Wooden-Fish-Vue-Web/)

```
npm install pinia
npm i pinia-plugin-persist //数据持久化
npm install dayjs

npm install element-plus --save
npm install -D unplugin-vue-components unplugin-auto-import//自动导入
配置
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  transpileDependencies: true,
  ...
});

```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
