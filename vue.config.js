/*
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-10-17 15:34:02
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /my-anniversary-vue/vue.config.js
 * @version:
 */
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
  // 如果在将 Vue 项目打包发布到 GitHub Pages 后，资源请求报 404 错误，可能是由于以下原因导致的：
  // 公共路径配置错误：请确保在项目的 vue.config.js 文件中正确配置了公共路径。公共路径应该与你在 GitHub Pages 上托管项目的路径相对应。例如，如果你的项目托管在 https://jackiedyh.github.io/Wooden-Fish-Vue-Web/，则公共路径应设置为 '/Wooden-Fish-Vue-Web/'。
  // 资源文件未正确部署：请确认在将项目打包后，已将生成的 dist 文件夹中的所有文件正确地上传到 GitHub 仓库的 gh-pages 分支或 docs 文件夹中。确保文件路径与资源请求路径一致。
  publicPath:
    process.env.NODE_ENV === 'production' ? '/my-anniversary-vue/' : '/',
  // 引入scss全局变量
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和Mixin additionalData允许全局引入scss文件，
        // 全局引入后就可以直接用 无需每个组件都import了
        additionalData: `
        @import "~@/assets/styles/variable.scss";
        // @import "~@/assets/styles/mixin.scss";
        `
      }
    }
  },
  devServer: {
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      // '/api': {
      //     target: 'https://tenapi.cn',
      //     ws: false,
      //     changeOrigin: true,
      //     // pathRewrite: {
      //     //     '/k': ''
      //     // }
      // },
    }
  }
});
