<script setup lang="ts">
import Search from './components/Search.vue'
import Results from './components/Results.vue';


const handleSearch = (query: string) => {
    // parse
}
</script>

<template>
  <div class="h-screen w-screen bg-slate-100">
    <div class="py-6">
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1
            class="text-center text-6xl font-bold font-semibold leading-tight tracking-tight tracking-widest text-gray-900"
            style="font-family: 'IBM Plex Serif', serif;"
          >
            Sherlock
          </h1>
        </div>
      </header>
      <Search @search="handleSearch" />
    </div>
    <hr class="my-6">
    <Results />
  </div>
</template>
