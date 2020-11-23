<template>
  <div class="bg-gray-100">
    <div class="container">
      <div class=" px-4 py-6 text-center font-bold flex flex-col">
        Tailwind Hamburgers
        <a
          class="self-center mt-2 text-gray-600 hover:text-gray-700"
          href="https://github.com/patrickgulas/tailwind-hamburgers"
          target="_blank"
        >
          <GithubIcon class="h-6 w-auto" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import GithubIcon from './icons/GithubIcon.vue'

export default Vue.extend({
  components: {
    GithubIcon,
  },
})
</script>
