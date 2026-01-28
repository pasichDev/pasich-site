import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://pasichdev.xyz',
    integrations: [sitemap()],
    build: {
        assets: '_assets'
    }
});
