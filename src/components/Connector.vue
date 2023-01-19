<script setup lang="ts">

import { PropType, toRefs } from 'vue';

const props = defineProps({
    data: {
        type: Object as PropType<any[]>,
        required: true,
    },
});

const { data } = toRefs(props);
</script>

<template>
  <div class="flex justify-between">
    <div class="flex space-x-3">
      <svg
        class="w-6 h-6"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="6.5"
          cy="6.5"
          r="6.5"
          fill="#E2FBE8"
        />
        <circle
          cx="6.49994"
          cy="6.5"
          r="3.5"
          fill="#77DB89"
        />
      </svg>
      <h2>{{ data.name }}</h2>
    </div>
    <a
      :href="data.linkToConnector"
      class="text-sm underline text-slate-400"
    >Goto</a>
  </div>
  <div
    v-for="(item, index) of Object.entries(data)"
    :key="item"
  >
    <div
      v-if="index !== 0"
      class="flex justify-between text-sm"
    >
      <span class="text-slate-600">{{ item[0] }}</span>
      <span class="text-slate-400">{{ item[1] }}</span>
    </div>
  </div>
</template>