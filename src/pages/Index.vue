<template>
  <Layout>
    <div class="text-center py-6 px-4">
      <div>
        <h2 class="font-bold text-2xl">Demo</h2>
        <ComponentPreview class="mt-8" />
      </div>
      <div class="mt-8 text-left max-w-xl mx-auto">
        <h2 class="font-bold text-lg">Usage</h2>
        <div class="mt-4">
          <div>
            1. Install a plugin
            <Prism class="mt-4">{{
              `npm install tailwind-hamburgers --save`
            }}</Prism>
            <span class="my-4 inline-block">or</span>
            <Prism>{{ `yarn add tailwind-hamburgers --save` }}</Prism>
          </div>
          <div class="mt-8">
            2. Add a plugin to Tailwind
            <Prism class="mt-4" language="javascript">{{
              instructionPlugin
            }}</Prism>
          </div>
          <div class="mt-8">
            3. Add an hamburger to a markup
            <Prism class="mt-4" language="html">{{ instructionMarkup }}</Prism>
          </div>
          <div class="mt-8">
            4. Trigger class name for active state
            <div class="mt-4 text-gray-700">
              Toggle <b>tham-active</b> class on the element with
              <b>tham</b> class name.
            </div>
          </div>
          <h2 class="font-bold text-lg mt-8">Customization</h2>
          <div class="mt-4">
            <h5 class="font-bold">Size</h5>
            <div class="mt-4 text-gray-700">
              You can set a size of hamburger menu by adding class to element
              with <b>tham</b> class name.
              <p class="mt-2">
                Available values are: <b>tham-w-4</b>, <b>tham-w-6</b>,
                <b>tham-w-8</b>, <b>tham-w-12</b>.
              </p>
            </div>
          </div>
          <div class="mt-8">
            <h5 class="font-bold">Color</h5>
            <div class="mt-4 text-gray-700">
              You can set a color of hamburger menu by adding class to element
              with <b>tham-inner</b> class name. For example: bg-indigo-500,
              bg-green-300, bg-gray-900.
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Prism from 'vue-prism-component'
import beautify from 'js-beautify'

import ComponentPreview from '../components/ComponentPreview.vue'

export default {
  components: {
    ComponentPreview,
    Prism,
  },
  computed: {
    instructionPlugin() {
      return beautify.js_beautify(
        `
        // tailwind.config.js
        module.exports = {
          ...
          plugins: [require('tailwind-hamburgers')],
        }
      `,
        { indent_size: 2 }
      )
    },
    instructionMarkup() {
      return beautify.html_beautify(
        `
          <div class="tham tham-e-squeeze tham-w-6">
            <div class="tham-box">
              <div class="tham-inner" />
            </div>
          </div>
      `,
        { indent_size: 2 }
      )
    },
  },
}
</script>
