<script>
import {defineComponent} from "vue";
import Card from "./Card.vue";

export default defineComponent({
  components: {Card}
})
</script>
<template>
<main class="h-full p-6">
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <Card resource-name="Connectors" results-count="700"/>
    <Card resource-name="LogzIO" results-count="346"/>
    <Card resource-name="APCs" results-count="52"/>
  </ul>

</main>
</template>