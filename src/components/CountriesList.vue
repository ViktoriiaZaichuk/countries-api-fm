<script setup>
import CountryCard from './CountryCard.vue';
import { reactive, defineProps, onMounted, computed } from 'vue';
import axios from 'axios';

// Define props to receive the selected region from the parent component
const props = defineProps({
  selectedRegion: String,
});

// Reactive state to manage countries, loading, and error state
const state = reactive({
  countries: [],
  isLoading: true,
  error: null,
});

// Fetch countries when the component is mounted
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/countries');
    state.countries = response.data;
  } catch (error) {
    console.error('Error fetching contries', error);
    state.error = 'Failed to load countries. Please try again later.';
  } finally {
    state.isLoading = false;
  }
});

// Compute filtered countries based on the selected region
const filteredCountries = computed(() => {
  if (props.selectedRegion !== 'Filter by Region') {
    return state.countries.filter(country => country.region === props.selectedRegion);
  } else {
    return state.countries;
  }
});
</script>

<template>
    <div v-if="state.isLoading">
      <p>Loading countries...</p>
    </div>
    <div v-else-if="state.error">
      <p class="error-message">{{ state.error }}</p>
    </div>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CountryCard 
          v-for="country in filteredCountries" 
          :key="country.alpha3Code" 
          :country="country" 
        />
    </section>
</template>