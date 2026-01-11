// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: "HowieCong's Docs",
          social: [
              { icon: 'github', label: 'GitHub', href: 'https://github.com/howiecong' },
              { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/howiecong/' },
              { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/howiecong_828/' }
          ],
          sidebar: [
              {
                  label: 'Front-End',
                  items: [
                      { label: '1.React', slug: 'front-end/react' },
                      { label: '2.Babel', slug: 'front-end/babel' },
                  ],
              },	
              {
                  label: 'Back-End',
                  items: [
                      { label: '1.Node.js', slug: 'back-end/nodejs' },
                      { label: '2.Koa.js', slug: 'back-end/koajs' },
                  ],
              },
              {
                  label: 'AI Agent',
                  items: [
                      { label: '1.Langchain', slug: 'ai-agent/langchain' },
                      { label: '2.Langgraph', slug: 'ai-agent/langgraph' },
                  ],
              },
              {
                  label: 'Open Source',
                  items: [
                      { label: 'Visactor', slug: 'open-source/visactor' },
                  ],
              },
              {
                  label: 'Autonomous-Driving',
                  items: [
                      { label: '1.Data-Loop', slug: 'autonomous-driving/data-loop' },
                      { label: '2.BEV', slug: 'autonomous-driving/bev' },
                  ],
              },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});
