// @ts-check
import { defineConfig } from 'astro/config';



import auth from 'auth-astro';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  //...
  integrations: [auth()],

  adapter: netlify()
});