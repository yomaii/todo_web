/* import { fileURLToPath, URL } from "node:url";
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir);
};
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": pathResolve("src"),
      /* "@": fileURLToPath(new URL("./src", import.meta.url)), */
    },
  },
});
