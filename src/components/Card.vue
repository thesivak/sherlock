<script lang="ts">
import { computed, defineComponent, PropType, Ref, toRefs } from 'vue';
import Apc from './Apc.vue';
import Connector from './Connector.vue';
import Credentials from './Credentials.vue';
import Default from './Default.vue';
import List from './List.vue';
import { AVAILABLE_CARD_TYPES } from '../constants/constants';

export default defineComponent({
    name: 'Card',
    components: {
        Apc,
        Connector,
        Credentials,
        Default,
        List,
    },
    props: {
        cardType: {
            type: String,
            required: false,
            default: '',
        },
        data: {
            type: Object as PropType<any[]>,
            required: true,
        },
    },
    setup(props) {
        const { cardType } = toRefs(props);

        console.log(props.data);

        const parsedCardType: Ref<string | null> = computed((): string | null => cardType.value?.length ? cardType.value : null);
        const parseType = (type: string, data: any): string => {
            if (data.length) {
                return 'List';
            }
            return AVAILABLE_CARD_TYPES.includes(type) ? type : 'Default';
        };

        return {
            parsedCardType,
            parseType,
        }
    },
});
</script>

<template>
  <div
    v-if="data[0].data !== []"
    class="relative rounded-md border bg-white p-6 shadow focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
  >
    <div class="mt-8">
      <h3
        v-if="parsedCardType"
        class="text-lg font-medium"
      >
        {{ parsedCardType }}
      </h3>
      <div class="mt-12">
        <ul class="w-full space-y-6">
          <li
            v-for="record in data"
            :key="record.type"
          >
            <Component
              :is="parseType(record.type, record.data)"
              v-if="record.data"
              :data="record.data"
              :type="cardType"
            />
          </li>
        </ul>
      </div>
    </div>
    <span
      class="
                  pointer-events-none
                  absolute
                  top-6
                  right-6
                  text-gray-300
                  group-hover:text-gray-400"
      aria-hidden="true"
    >
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
        />
      </svg>
    </span>
  </div>
</template>