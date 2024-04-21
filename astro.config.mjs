import { defineConfig } from 'astro/config';

export default defineConfig({
    prefetch: true,
    experimental: {
        clientPrerender: true,
    },
});
