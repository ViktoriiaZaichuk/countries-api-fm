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
          class="cursor-pointer"
        >
        <div class="">
          <img :src="country.flags.svg" :alt="country.name + ' flag'">
        </div>
        <h2 class="">{{ country.name }}</h2>
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
        </RouterLink>
    </div>
</template>