<script setup lang="ts">
import Search from './components/Search.vue'
import Results from './components/Results.vue';
</script>

<template>
  <div class="p-6">
    <header>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-center">
          Sherlock
        </h1>
      </div>
    </header>
    <Search />
  </div>
  <hr>
  <Results />
</template>
