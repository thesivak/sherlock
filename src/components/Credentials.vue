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
  <div
    v-for="(item, index) of Object.entries(data)"
    :key="item"
  >
    <div
      v-if="index !== 0 && item[1] !== null"
      class="flex justify-between text-sm"
    >
      <span class="text-slate-600">{{ item[0] }}</span>
      <span class="text-slate-400">{{ item[1] }}</span>
    </div>
  </div>
</template>