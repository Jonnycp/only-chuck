import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/only-chuck/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true
      },
      manifest: {
        name: "OnlyCHUCK",
        short_name: "OnlyCHUCK",
        description: "L'app dei contenuti privati di Chuck Norris",
        theme_color: "#d2a741",
        background_color: "#151f1f",
        display: "fullscreen",
        orientation: "portrait",
        scope: ".",
        start_url: "/only-chuck/",
        id: "/",
        icons: [
          {
            src: "/only-chuck/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/only-chuck/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/only-chuck/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/only-chuck/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        protocol_handlers: [
          {
            protocol: "web+chuck",
            url: "/?category=%s",
          },
        ],
        permissions: ["clipboard-write"],
      },
    }),
  ],
});
