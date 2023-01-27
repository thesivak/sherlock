<script setup lang="ts">
import Card from './Card.vue';
import { computed, toRefs } from 'vue';
import { AVAILABLE_CARD_TYPES } from '../constants/constants';

const props = defineProps<{
  data: Map<string, any[]>;
}>();

const { data } = toRefs(props);

const mapToArray = computed((): any[] => {
    return Array.from(data.value, function(item) {
        return { key: item[0], value: item[1] };
    });
});

const getCardType = (cardType: string): string => {
    if (AVAILABLE_CARD_TYPES.includes(cardType)) {
        return cardType;
    } else {
        return '';
    }
};
</script>
<template>
  <div
    class="grid grid-cols-3 gap-5 p-6"
  >
    <Card
      v-for="card in mapToArray"
      :key="card.key"
      :card-type="getCardType(card.key)"
      :data="card.value"
    />
  </div>
</template>