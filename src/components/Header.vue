<script setup>
import { ref, onMounted } from 'vue';

// Declare a reactive state variable for dark mode
const isDarkMode = ref(false);

// Function to toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle('dark', isDarkMode.value);
  localStorage.setItem('dark-mode', isDarkMode.value);
};

// Check for dark mode preference when the component is mounted
onMounted(() => {
  isDarkMode.value = localStorage.getItem('dark-mode') === 'true';
  if (isDarkMode.value) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});
</script>

<template>
  <header class="p-6 flex items-center justify-between bg-white dark:bg-dark-blue-dm text-very-dark-blue-dm dark:text-white shadow-xl shadow-dark-blue">
    <h1 class="font-black text-xl">Where in the world?</h1>
    <button 
      @click="toggleDarkMode"
      class="text-bold"
    >
      <span class="font-bold">{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
    </button>
  </header>
</template>