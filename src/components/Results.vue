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
    <Card/>
  </ul>

</main>
</template>