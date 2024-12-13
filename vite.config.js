import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import Inspect from 'vite-plugin-inspect';
export default defineConfig({
    plugins: [
        Inspect(),
        laravel({
            input: [
                'resources/js/user.js',
                'resources/js/panel.js',
                'resources/js/admin.js',
                'resources/js/auth.js',
                'resources/css/user.css',
                'resources/css/panel.css',
                'resources/css/admin.css',
                'resources/sass/app.scss',
                'resources/css/auth.css',
            ],
            refresh: true,
        }),
    ],
    server: {
        host: '127.0.0.1'
      },
});
