import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// KaTeX khai báo mỗi font ở 3 định dạng (woff2, woff, ttf). Vì trang được gộp
// thành một tệp duy nhất, chỉ giữ woff2 để tệp không phình to gấp ba.
const katexWoff2Only = (): Plugin => ({
  name: "katex-woff2-only",
  enforce: "pre",
  transform(code, id) {
    if (!/katex(\.min)?\.css/.test(id)) return null;
    return {
      code: code.replace(/,\s*url\([^)]*\.(?:woff|ttf)\)\s*format\("(?:woff|truetype)"\)/g, ""),
      map: null,
    };
  },
});

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [katexWoff2Only(), react(), tailwindcss(), viteSingleFile()],
  server: { host: true, allowedHosts: [".e2b.app"] },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
