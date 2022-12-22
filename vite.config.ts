import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    outDir: 'dest'
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    proxy: {
      '/educms': {
        target: 'http://localhost:6004/educms',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/educms/, '')
      },

      '/educenter': {
        target: 'http://localhost:6010/educenter',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/educenter/, '')
      },

      '/signal': {
        target: 'http://localhost:6011/signal',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/signal/, '')
      },

      '/icon': {
        target: 'https://pestscontrol.oss-cn-hangzhou.aliyuncs.com/icon',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/icon/, '')
      },

      "/api": {
        target: "http://ptc.qiter.com.cn:6005", //填写请求的目标地址
        ws: true,
        changeOrigin: true,   //允许跨域
        rewrite: (path) => path.replace(/^\/api/, ""),  //请求的时候使用这个api就可以
      },

    },
    cors: true
  },
  resolve: {
    // 配置别名
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
