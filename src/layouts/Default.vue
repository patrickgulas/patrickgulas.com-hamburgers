<template>
  <div class="bg-white">
    <Topbar />
    <slot />
    <Footer class="mt-8" />
  </div>
</template>

<script>
import Vue from 'vue'

import Topbar from '../components/Topbar.vue'
import Footer from '../components/Footer.vue'

export default Vue.extend({
  metaInfo: {
    meta: [
      {
        name: 'author',
        content: 'Patrick Gulas',
      },
      {
        name: 'description',
        content: 'Hamburger menus built with Tailwind CSS',
      },
      {
        name: 'keywords',
        content: 'menu, hamburger, hamburgers, tailwind, tailwindcss',
      },
    ],
  },
  components: {
    Topbar,
    Footer,
  },
})
</script>
