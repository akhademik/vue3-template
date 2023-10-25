import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			$assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
			$views: fileURLToPath(new URL('./src/views', import.meta.url)),
			$components: fileURLToPath(new URL('./src/components', import.meta.url)),
			$modules: fileURLToPath(new URL('./src/modules', import.meta.url))
		}
	}
});
