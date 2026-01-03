// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "HowieCong's Docs",
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/howiecong' }],
			sidebar: [
				{
					label: 'Front End',
					items: [
						{ label: 'React', slug: 'front-end/react' },
					],
				},	
				{
					label: 'Back End',
					items: [
						{ label: 'Node.js', slug: 'back-end/nodejs' },
					],
				},
				{
					label: 'AI Agent',
					items: [
						{ label: '1. Langchain', slug: 'ai-agent/langchain' },
						{ label: '2. Langgraph', slug: 'ai-agent/langgraph' },
					],
				},
				{
					label: 'Open Source',
					items: [
						{ label: 'Visactor', slug: 'open-source/visactor' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
			],
		}),
	],
});
