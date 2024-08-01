<script setup>
import CountryCard from './CountryCard.vue';
import { reactive, defineProps, onMounted } from 'vue';
import axios from 'axios';

const state = reactive({
  countries: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/countries');
    state.countries = response.data;
  } catch (error) {
    console.error('Error fetching contries', error);
  } finally {
    state.isLoading = false;
  }
});


</script>


<template>
    <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CountryCard 
          v-for="country in state.countries" 
          :key="country.alpha3Code" 
          :country="country" 
        />
    </section>
</template>