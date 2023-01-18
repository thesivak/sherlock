<script setup lang="ts">
</script>

<template>
    <div class="min-h-full">
        <div class="py-10">
            <header>
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-center">Sherlock</h1>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center items-center mt-8">
                    <div class="w-1/2 relative">
                        <input type="text" name="search" id="search" placeholder="Sherlock me..."
                            class="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                        <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                            <kbd
                                class="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">⌘K</kbd>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

</template>
