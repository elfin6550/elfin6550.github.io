import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "elfin6550",
  description: "A GitHub Pages site based on VitePress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/elfin6550/elfin6550.github.io' }
    ]
  }
})
