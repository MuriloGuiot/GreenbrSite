import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/" works for a root domain like greenbr.net.br.
  // If you ever deploy under a subfolder, change this to "/subfolder/".
  base: "/",
});
