<script setup>
  import Header from '@/components/Header.vue';
  import { RouterView } from 'vue-router';
</script>

<template>
  <Header />
  <main class="bg-very-light-gray-lm dark:bg-very-dark-blue-dm text-very-dark-blue-dm dark:text-white">
    <RouterView />
  </main>
</template>
