<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const countryId = route.params.alpha3Code;

const state = reactive({
    country: null,  // Initialize as null
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
    hell
    <div class="">
        <RouterLink
          to="/"
          class=""
        >
            Go Back
        </RouterLink>
    </div>
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
                    <strong>Currencies:</strong>           <span v-for="currency in state.country.currencies" :key="currency.code">
            {{ currency.name }} ({{ currency.symbol }})
          </span>
                </li>
                <li>
                    <span v-for="language in state.country.languages" :key="language.iso639_1">
            {{ language.name }}
          </span>
                </li>
            </ul>
        </div>
        <div>
            <strong>Border Countries:</strong>
            <ul>
                <li>
                    <RouterLink
                      to="/"
                      class=""
                    >
                      
                    </RouterLink>
                </li>
            </ul>
        </div>
    </section>
</template>