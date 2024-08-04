import { defineConfig } from "vite";

export default defineConfig({
    plugins: [],
    base: "/front-end-entrance-exam/", // Замените на '/REPOSITORY_NAME/' для GitHub Pages
    server: {
        port: 3000, // Порт для локального сервера
    },
    build: {
        outDir: "dist", // Папка для выходных файлов
    },
});
