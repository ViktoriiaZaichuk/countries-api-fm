<script setup>
  import Header from '@/components/Header.vue';
  import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-dvh flex flex-col">
    <Header />
    <main class="flex-grow p-6 bg-very-light-gray-lm dark:bg-very-dark-blue-dm text-very-dark-blue-dm dark:text-white">
      <RouterView />
    </main>
  </div>
</template>
