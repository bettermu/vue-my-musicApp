# vue-music-app

## 简单介绍

### 前端

* vue全家桶
* vuex状态管理工具
* axios
* swiper

### 后端

* [网易云音乐API NodeJs版](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90-api)

### 运行

* npm install
* npm run dev

### 注意的点

#### 关于引入stylus

首先vue-loader里自带了css后缀的loader处理，因此无需在build目录的webpack.base.config里配置上css的loader处理，不然会运行报错，只需要npm install stylus stylus-loader即可
