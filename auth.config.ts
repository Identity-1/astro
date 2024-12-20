import { Auth } from 'auth-astro';
import GitHub from '@auth/core/providers/github';
import { defineConfig } from 'auth-astro';


// export const auth = Auth({
//     providers: [
//       GitHub({
//         clientId: process.env.GITHUB_CLIENT_ID,
//         clientSecret: process.env.GITHUB_CLIENT_SECRET,
//       }),
//     ],
//     secret: process.env.AUTH_SECRET,
//   });





export default defineConfig({
  providers: [
    GitHub({
      clientId: import.meta.env.GITHUB_CLIENT_ID,
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
    }),
  ],
});