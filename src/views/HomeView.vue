<script setup>
import { ref } from 'vue';
import CountriesList from '@/components/CountriesList.vue';
import Search from '@/components/Search.vue';
import SelectRegion from '@/components/SelectRegion.vue';

// ref to hold the selected region state
const selectedRegion = ref('Filter by Region');

// Update the selected region
function updateSelectedRegion(region) {
  selectedRegion.value = region;
}


</script>

<template>
    <div class="flex flex-col justify-between items-start sm:flex-row sm:items-center">
        <Search />
        <SelectRegion 
            :selectedRegion="selectedRegion" 
            @updateRegion="updateSelectedRegion" 
        />
    </div>
    <CountriesList 
        :selectedRegion="selectedRegion"
    />
</template>