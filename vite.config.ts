import {defineConfig} from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/markdown-api.ts',
            name: 'MarkdownAPI',
            fileName: (format) => `markdown-api.${format}.js`
        },
        minify: false,
        copyPublicDir: false
    }
});
