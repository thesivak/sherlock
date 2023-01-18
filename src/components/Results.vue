<script setup lang="ts">
import Card from './Card.vue';
</script>
<template>
  <div
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-5"
  >
    <Card
      resource-name="Connectors"
      :results-count="712"
    />
  </div>
</template>