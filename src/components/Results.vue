<script setup lang="ts">
import Connector from './Connector.vue';
import { Record } from '../types';

const records: Record[] = [
    {
        'name': 'WordPress',
        'localToken': '66b67c21-280c-4fe4-a21a-81fc7f867b6f',
        'urlId': 'xxx',
        'linkToConnector': 'xxx',
    },
    {
        'name': 'Drupal',
        'localToken': 'xxx',
        'urlId': 'xxx',
        'linkToConnector': 'xxx',
    },
    {
        'name': 'Contentful',
        'localToken': 'xxx',
        'urlId': 'xxx',
        'linkToConnector': 'xxx',
    },
];
</script>
<template>
  <div
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-5"
  >
    <Connector
      :records="records"
      resource-name="Connectors"
      :results-count="712"
    />
  </div>
</template>