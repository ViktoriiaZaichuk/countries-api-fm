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
    <RouterLink to="/">Go Back</RouterLink>
    <section>
      <div>
        <img :src="state.country.flags.svg" :alt="state.country.name + ' flag'" />
      </div>
      <div>
        <h2>{{ state.country.name }}</h2>
        <ul>
          <li>
            <strong>Population:</strong> {{ state.country.population.toLocaleString() }}
          </li>
          <li>
            <strong>Region:</strong> {{ state.country.region }}
          </li>
          <li>
            <strong>Capital:</strong> {{ state.country.capital }}
          </li>
        </ul>
        <ul>
          <li>
            <strong>Top Level Domain:</strong> {{ state.country.topLevelDomain.join(', ') }}
          </li>
          <li>
            <strong>Currencies:</strong>
            <span 
              v-for="currency in state.country.currencies" 
              :key="currency.code"
            >
              {{ currency.name }} ({{ currency.symbol }})
            </span>
          </li>
          <li>
            <span 
                v-for="language in state.country.languages" 
                :key="language.iso639_1"
            >
              {{ language.name }}
            </span>
          </li>
        </ul>
      </div>
      <div>
        <strong>Border Countries:</strong>
        <ul>
          <li 
            v-for="borderCountry in state.country.borders" 
            :key="borderCountry"
          >
            <RouterLink :to="{ name: 'Country', params: { alpha3Code: borderCountry } }">
              {{ borderCountry }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>