<script setup lang="ts"></script>
<template>
  <div class="mx-auto mt-8 flex max-w-7xl items-center justify-center sm:px-6 lg:px-8">
    <div class="relative w-1/2">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <svg class="h-5 w-5 text-gray-400"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

      </div>
      <input type="text" name="search" id="search" placeholder="Sherlock me..."
             class="block w-full rounded-md border-gray-300 pr-12 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
      <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
        <kbd
            class="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">⌘K</kbd>
      </div>
    </div>
  </div>
</template>
