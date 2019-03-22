import { resolve } from 'path';

import pageRoutes from './config/router.config';
// ref: https://umijs.org/config/
export default {
  //路由配置
  routes: pageRoutes,
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'umi-web',
      dll: false,

      //配置页面动态加载
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
        level: 3,
      },
    }],
  ],
  //配置路径别名
  alias: {
    '@': resolve(__dirname, './src'),
    'utils': resolve(__dirname, './src/utils'),
    'services': resolve(__dirname, './src/services'),
    'models': resolve(__dirname, './src/models'),
    'assets': resolve(__dirname, './src/assets'),
    'components': resolve(__dirname, './src/components'),
    'pages': resolve(__dirname, './src/pages')
  },
  //服务器代理
  proxy: {
    '/api': {
      target: 'http://localhost:8001/api/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  //启用hash路由
  history: 'hash',
}
