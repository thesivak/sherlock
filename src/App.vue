<script setup lang="ts">
import Search from './components/Search.vue'
import Results from './components/Results.vue';
import { checkStatus, searchByQuery } from './helpers/api';
import { ref } from 'vue';

const resultsData = ref([]);
const handleSearch = async (searchQuery: string) => {
    let idsArray: string[] = [];
    await searchByQuery(searchQuery)
        .then(data => {
            resultsData.value = [];
            idsArray = data
        });
    for (const id of idsArray) {
        await checkStatus(id).then(response => {
            if (response.data.status === 'FOUND') {
                resultsData.value.push(response.data);
            } else if (response.data.status === 'PENDING') {
                let counter = 0;
                const repeatCheckId = setInterval(async function repeatCheck() {
                    if (counter === 10) {
                        clearInterval(repeatCheckId);
                        return;
                    }
                    counter++;
                    await checkStatus(id)
                        .then(response => {
                            if (response.data.status === 'FOUND') {
                                resultsData.value.push(response.data);
                            }
                        });
                }, 2000);
            }
        });
    }
};
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
    <hr>
    <Results />
  </div>
</template>
