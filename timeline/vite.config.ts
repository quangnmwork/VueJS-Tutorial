// import { fileURLToPath, URL } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import UnoCSS from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    Components(),
    AutoImport({
      imports: ["vue", "vue/macros"],
      dirs: ["./src/composables"],
      vueTemplate: true,
    }),
    UnoCSS({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
});

