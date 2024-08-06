<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const countryId = route.params.alpha3Code;

const state = reactive({
    country: null,
    isLoading: true,
    error: null,
});

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/countries');
    const countries = response.data;

    // Find the country matching the route parameter
    state.country = countries.find(country => country.alpha3Code === countryId);

    if (!state.country) {
      throw new Error('Country not found');
    }

  } catch (error) {
    state.error = 'Error fetching country data';
    console.error('Error fetching country data', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <!-- Display a loading message while fetching data -->
  <div v-if="state.isLoading">Loading...</div>

  <!-- Display an error message if something went wrong -->
  <div v-else-if="state.error">{{ state.error }}</div>

  <!-- Render country details only if country data is available -->
  <div v-else-if="state.country">
    <RouterLink 
      to="/"
      class="shadow shadow-dark-blue inline-block bg-white dark:bg-dark-blue-dm py-3 px-6 mb-8 rounded-lg"
    >
      <-- Go Back
    </RouterLink>

    <section class="flex flex-col justify-between items-start sm:flex-row sm:items-center">
      <div class="flex-1 p-0 sm:pr-6">
        <img :src="state.country.flags.svg" :alt="state.country.name + ' flag'" />
      </div>

      <div class="flex-1 p-0 sm:p-6">
        <h2 class="font-black text-xl mb-6 mt-6 sm:mt-0">{{ state.country.name }}</h2>

        <div class="flex flex-col sm:flex-row sm:justify-between mb-8">
          <ul>
            <li class="mb-2">
              <strong>Native name: </strong> {{ state.country.nativeName }}
            </li>
            <li class="mb-2">
              <strong>Population: </strong> {{ state.country.population.toLocaleString() }}
            </li>
            <li class="mb-2">
              <strong>Region: </strong> {{ state.country.region }}
            </li>
            <li class="mb-2">
              <strong>Capital: </strong> {{ state.country.capital }}
            </li>
          </ul>
  
          <ul class="mt-6 sm:mt-0">
            <li class="mb-2">
              <strong>Top Level Domain: </strong> {{ state.country.topLevelDomain.join(', ') }}
            </li>
            <li class="mb-2">
              <strong>Currencies: </strong>
              <span 
                v-for="currency in state.country.currencies" 
                :key="currency.code"
              >
                {{ currency.name }}
              </span>
            </li>
            <li class="mb-2">
              <strong>Languages: </strong>
              <span 
                  v-for="(language, index) in state.country.languages" 
                  :key="language.iso639_1"
              >
                {{ language.name }}<span v-if="index < state.country.languages.length - 1">, </span>
              </span>
            </li>
          </ul>
        </div>

        <div class="flex flex-col sm:flex-row">
          <strong class="inline-block mr-2">Border Countries: </strong>
          <ul class="flex flex-row mt-3 sm:mt-0">
            <li 
              v-for="borderCountry in state.country.borders" 
              :key="borderCountry"
            >
              <RouterLink 
                :to="{ name: 'Country', params: { alpha3Code: borderCountry } }"
                class="bg-white dark:bg-dark-blue-dm py-1 px-4 mb-2 mr-2 rounded-sm shadow shadow-dark-blue"
              >
                {{ borderCountry }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>