<script setup>
import { RouterLink } from 'vue-router';
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
  country: Object,
});

</script>

<template>
    <div class="">
        <RouterLink
          :to="country.alpha3Code"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        />
        <div>
          <img :src="country.flags.svg" :alt="country.name + ' flag'">
        </div>
        <h2>{{ country.name }}</h2>
        <ul>
            <li>
                <strong>Population:</strong> {{ country.population }}
            </li>
            <li>
                <strong>Region:</strong> {{ country.region }}
            </li>
            <li>
                <strong>Capital:</strong> {{ country.capital }}
            </li>
        </ul>
    </div>
</template>