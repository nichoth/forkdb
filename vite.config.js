import { defineConfig } from 'vite'

export default defineConfig({
    define: {
        global: 'globalThis'
    },
    resolve: {
        alias: {
            events: 'events/'
        }
    },
    root: 'example',
    esbuild: {
        jsx: 'automatic',
        jsxImportSource: 'preact',
        logOverride: { 'this-is-undefined-in-esm': 'silent' }
    },
    publicDir: '_public',
    server: {
        port: 8888,
        host: true,
        open: true,
    },
    build: {
        minify: false,
        outDir: '../public',
        emptyOutDir: true,
        sourcemap: 'inline'
    }
})
