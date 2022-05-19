import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    resolve: {
        alias: [
            { find: '@', replacement: '/src' },
            { find: 'packages', replacement: '/packages' }
        ]
    },
    plugins: [vue()],
    build: {
        target: 'es2015',
        lib: {
            entry: 'packages/index.ts',
            name: 'vdi',
            fileName: (format) => `vdi.${format}.js`,
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ['@wendellhu/redi', 'vue', 'vue-router']
        },
        minify: 'esbuild'
    }
})
