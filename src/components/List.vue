<script setup lang="ts">

import { PropType, toRefs } from 'vue';
import Accordion from './Accordion.vue';

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
      <h2>List</h2>
    </div>
  </div>
  <Accordion :title="data.name || data.localToken || data.id || 'Data title (WIP)'">
    <div
      v-for="(item) of Object.entries(data)"
      :key="item"
    >
      <div
        class="flex justify-between text-sm"
      >
        <span class="text-slate-600">{{ item[0] }}</span>
        <span class="text-slate-400">{{ item[1] }}</span>
      </div>
    </div>
  </Accordion>
</template>