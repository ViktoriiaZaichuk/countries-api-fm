<script setup>
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
  country: Object,
});

</script>

<template>
    <div class="overflow-hidden rounded-lg shadow-lg shadow-dark-blue dark:bg-dark-blue-dm">
        <RouterLink
          :to="country.alpha3Code"
          class="cursor-pointer"
        >
        <div class=" overflow-hidden">
          <img 
            :src="country.flags.svg" 
            :alt="country.name + ' flag'"
            class="object-cover h-44 w-full"
          >
        </div>
        <div class="p-6">
          <h2 class="pb-4 font-black text-lg">{{ country.name }}</h2>
          <ul>
              <li>
                  <strong class="font-bold">Population:</strong> {{ country.population }}
              </li>
              <li>
                  <strong class="font-bold">Region:</strong> {{ country.region }}
              </li>
              <li>
                  <strong class="font-bold">Capital:</strong> {{ country.capital }}
              </li>
          </ul>
        </div>
        </RouterLink>
    </div>
</template>