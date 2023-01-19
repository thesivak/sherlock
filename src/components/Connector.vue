<script setup lang="ts">

import { PropType } from 'vue';
import { Record } from '../types';

defineProps({
    resourceName: {
        type: String,
        required: true,
    },
    resultsCount: {
        type: Number,
        required: true,
    },
    records: {
        type: Object as PropType<Record[]>,
        required: true,
    },
})
</script>

<template>
  <div
    class="relative col-span-1 rounded-md border bg-white p-6 shadow transition-all duration-200 b group focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:shadow-xl"
  >
    <div>
      <span class="inline-flex rounded-lg bg-teal-50 p-3 text-teal-700 ring-4 ring-white">
        <svg
          class="h-6 w-6"
          x-description="Heroicon name: outline/clock"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </div>
    <div class="mt-8">
      <h3 class="text-lg font-medium">
        <a
          href="#"
          class="focus:outline-none"
        >
          <span
            class="absolute inset-0"
            aria-hidden="true"
          />
          {{ resourceName }}
        </a>
      </h3>
      <div class="mt-12">
        <ul class="w-full space-y-6">
          <li
            v-for="record in records"
            :key="record.name"
          >
            <div class="flex justify-between">
              <div class="flex space-x-3">
                <svg
                  class="w-6 h-6"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="6.5"
                    cy="6.5"
                    r="6.5"
                    fill="#E2FBE8"
                  />
                  <circle
                    cx="6.49994"
                    cy="6.5"
                    r="3.5"
                    fill="#77DB89"
                  />
                </svg>
                <h2>{{ record.name }}</h2>
              </div>
              <a
                href=""
                class="text-sm underline text-slate-400"
              >Goto</a>
            </div>
            <div
              v-for="(item, index) of Object.entries(record)"
              :key="item"
            >
              <div
                v-if="index !== 0"
                class="flex justify-between text-sm"
              >
                <span class="text-slate-600">{{ item[0] }}</span>
                <span class="text-slate-400">{{ item[1] }}</span>
              </div>
            </div>
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