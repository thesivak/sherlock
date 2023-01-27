<script setup lang="ts">
import Search from './components/Search.vue'
import Results from './components/Results.vue';
import { checkStatus, searchByQuery } from './helpers/api';
import { Ref, ref } from 'vue';

const resultsData: Ref<Map<string, any[]>> = ref(new Map());
const handleSearch = async (searchQuery: string) => {
    let idsArray: string[] = [];
    await searchByQuery(searchQuery)
        .then(data => {
            resultsData.value = new Map();
            idsArray = data;
        });
    for (const id of idsArray) {
        await checkStatus(id).then(response => {
            if (response.data.status === 'FOUND') {
                if (resultsData.value.has(response.data.type)) {
          resultsData.value.get(response.data.type)!.push(response.data);
                } else {
                    resultsData.value.set(response.data.type, [response.data]);
                }
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
                                if (resultsData.value.has(response.data.type)) {
                    resultsData.value.get(response.data.type)!.push(response.data);
                                } else {
                                    resultsData.value.set(response.data.type, [response.data]);
                                }
                            }
                        });
                }, 2000);
            }
        });
    }
};
</script>

<template>
  <div>
    <div class="py-6">
      <div class="flex justify-center">
        <div class="w-96 relative">
          <img
            class="w-96"
            src="https://www.seekpng.com/png/detail/190-1901809_sherlock-holmes-wallpaper-actors-sherlock-holmes-logo.png"
            alt=""
          >
          <img
            class="w-16 absolute bottom-0 right-0 mb-2 mr-6 rotate-12"
            src="https://i0.wp.com/www.confidentvoice.com/blog/wp-content/uploads/2013/06/the-letter-G.png"
            alt=""
          >
        </div>
      </div>
      <Search @search="handleSearch" />
    </div>
    <hr>
    <Results :data="resultsData" />
  </div>
</template>

<style>
body {
  background-color: #F6F6F6;
}
</style>
