
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import pluginYaml from 'vite-plugin-yaml2'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({ 
    base: process.env.VITE_BASE_URL,
    server: {
      host: "0.0.0.0",
      port: 5173,
      hmr: {
        host: "localhost"
      },
      watch: {
        usePolling: true,
      },
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [
      vue(),
      pluginYaml(),
      VueI18nPlugin({
        include: "@/locales/**",
      })
    ]
  })
}
