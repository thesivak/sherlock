<script setup lang="ts">
import { ref, toRefs } from 'vue';

const props = defineProps<{
  title: string;
}>();

const { title } = toRefs(props);

const active = ref(false);
</script>

<template>
  <div class="">
    <div class="tab__header">
      <a
        href="#"
        class="tab__link p-4 block bg-white hover:bg-gray-200 no-underline text-slate-600 border-b-2 rounded-md border-slate-400 flex justify-between"
        @click.prevent="active = !active"
      >
        <strong>{{ title }}</strong>
        <span
          v-show="!active"
          class="down-Arrow"
        />
        <span v-show="!active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
        <span v-show="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </span>
      </a>
      <div
        v-show="active"
        class="tab__content p-2"
      >
        <slot />
      </div>
    </div>
  </div>
</template>