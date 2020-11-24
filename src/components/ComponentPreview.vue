<template>
  <div
    class="bg-indigo-500 rounded-md max-w-3xl mx-auto text-white overflow-hidden"
    :class="{
      'pb-8': mode === 'preview',
    }"
  >
    <div class="flex justify-between p-4">
      <h4 class="font-bold text-sm">Squeeze</h4>
      <div class="flex space-x-4 text-sm font-bold">
        <div
          :class="{
            underline: mode === 'preview',
            'cursor-pointer': mode === 'code',
          }"
          @click="mode = 'preview'"
        >
          Preview
        </div>
        <div
          :class="{
            underline: mode === 'code',
            'cursor-pointer': mode === 'preview',
          }"
          @click="mode = 'code'"
        >
          Code
        </div>
      </div>
    </div>
    <div v-show="mode === 'code'">
      <Prism language="html">{{ code }}</Prism>
    </div>
    <div
      v-if="mode === 'preview'"
      class="flex justify-center items-center space-x-8 mt-8"
    >
      <div
        class="tham tham-e-squeeze tham-w-4"
        :class="{ 'tham-active': opened1 }"
        @click="opened1 = !opened1"
      >
        <div class="tham-box">
          <div class="tham-inner bg-white" />
        </div>
      </div>
      <div
        class="tham tham-e-squeeze tham-w-8"
        :class="{ 'tham-active': opened2 }"
        @click="opened2 = !opened2"
      >
        <div class="tham-box">
          <div class="tham-inner bg-white" />
        </div>
      </div>
      <div
        class="tham tham-e-squeeze tham-w-12"
        :class="{ 'tham-active': opened3 }"
        @click="opened3 = !opened3"
      >
        <div class="tham-box">
          <div class="tham-inner bg-white" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Prism from 'vue-prism-component'
import beautify from 'js-beautify'

import ComponentPreview from '../components/ComponentPreview.vue'

export default Vue.extend({
  components: {
    Prism,
  },
  data() {
    return {
      opened1: false,
      opened2: false,
      opened3: false,
      mode: 'preview',
    }
  },
  computed: {
    code() {
      return beautify.html_beautify(
        `
      <!-- w-4 -->  
      <div
        class="tham tham-e-squeeze tham-w-4"
        :class="{ 'tham-active': opened }"
      >
        <div class="tham-box">
          <div class="tham-inner bg-white" />
        </div>
      </div>

      <!-- w-8 -->  
      <div
        class="tham tham-e-squeeze tham-w-8"
        :class="{ 'tham-active': opened }"
      >
        <div class="tham-box">
          <div class="tham-inner bg-white" />
        </div>
      </div>

      <!-- w-12 -->  
      <div
        class="tham tham-e-squeeze tham-w-12"
        :class="{ 'tham-active': opened }"
      >
        <div class="tham-box">
          <div class="tham-inner bg-white" />
        </div>
      </div>
      `,
        { indent_size: 2 }
      )
    },
  },
})
</script>
