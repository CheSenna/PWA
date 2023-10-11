import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touch-icon.png", "masked-icon.svg"],
  manifest:{
    name:"YouDash",
    short_name:"YouDash",
    description:"YouTube Analytics Dashboard",
    icons:[
      {
      src: 'android-chrome-192x192.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'maskable'
    },
    {
      src:'android-chrome-512x512.png',
      sizes:'512x512',
      type:'image/png',
    },
    {
      src: 'apple-touch-icon.png',
      sizes:'180x180',
      type:'image/png',
    },
    {
      src: 'favicon-16x16.png',
      sizes:'16x16',  
      type:'image/png',
    },
    {
      src: 'favicon-32x32.png',
      sizes:'32x32',
      type:'image/png',
    },
    {
      src: 'apple-touch-icon-144x144.png',
      sizes:'144x144',
      type:'image/png',
      purpose:'any',
    }
  ],
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}

export default defineConfig({
  plugins: [vue(), VitePWA(manifestForPlugIn)],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
})