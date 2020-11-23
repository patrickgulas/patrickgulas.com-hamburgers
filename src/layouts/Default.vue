<template>
  <div>
    <Topbar />
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Topbar from '../components/Topbar.vue'

export default Vue.extend({
  components: {
    Topbar,
  },
})
</script>
