// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/styles/prism-tommorow.css'

export default function(Vue, { head }) {
  head.meta.push({
    name: 'title',
    content: 'Tailwind Hamburgers',
  })
  head.meta.push({
    name: 'author',
    content: 'Patrick Gulas',
  })
  head.meta.push({
    name: 'description',
    content: 'Hamburger menus built with Tailwind CSS',
  })
  head.meta.push({
    name: 'keywords',
    content: 'menu, hamburger, hamburgers, tailwind, tailwindcss',
  })
  head.bodyAttrs = { class: 'bg-gray-100' }
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
