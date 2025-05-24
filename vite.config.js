import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/flashcard-app/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        manifest: true,
        rollupOptions: {
            output: {
                manualChunks: undefined,
                assetFileNames: function (assetInfo) {
                    var info = assetInfo.name.split('.');
                    var ext = info[info.length - 1];
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
                        return "assets/images/[name]-[hash][extname]";
                    }
                    return "assets/[name]-[hash][extname]";
                },
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
            },
        },
    },
});
