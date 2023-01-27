<script setup lang="ts">

import { PropType, toRefs } from 'vue';
import Accordion from './Accordion.vue';

const props = defineProps({
    type: {
        type: String,
        required: true,
    },
    data: {
        type: Object as PropType<any[]>,
        required: true,
    },
});

const { data } = toRefs(props);
</script>

<template>
  <Accordion
    v-for="item in data"
    :key="item"
    :title="item.name || item.localToken || item.id || 'Data title (WIP)'"
  >
    <div
      v-for="(property) of Object.entries(item)"
      :key="property"
    >
      <div
        class="flex justify-between text-sm"
      >
        <span class="text-slate-600">{{ property[0] }}</span>
        <span class="text-slate-400">{{ property[1] }}</span>
      </div>
    </div>
  </Accordion>
</template>