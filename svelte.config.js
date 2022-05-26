import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					components: path.resolve('./src/components'),
					data: path.resolve('./src/data'),
					routes: path.resolve('./src/routes'),
					styles: path.resolve('./src/styles'),
					stores: path.resolve('./src/stores'),
					types: path.resolve('./src/types'),
					utils: path.resolve('./src/utils')
				}
			}
		},
		prerender: { default: true },
		paths: {
			base: process.env.NODE_ENV === 'development' ? '' : '/certificat'
		}
	}
};

export default config;
