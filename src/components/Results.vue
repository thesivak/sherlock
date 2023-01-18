<script setup lang="ts">
import Card from "./Card.vue";
</script>
<template>
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5">
    <Card resource-name="Connectors" :results-count="712"/>
  </ul>
</template>