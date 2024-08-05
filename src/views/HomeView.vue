<script setup>
import { ref } from 'vue';
import CountriesList from '@/components/CountriesList.vue';
import Search from '@/components/Search.vue';
import SelectRegion from '@/components/SelectRegion.vue';

// refs to hold the selected region and search query state
const selectedRegion = ref('Filter by Region');
const searchQuery = ref('');

// Update the selected region
function updateSelectedRegion(region) {
  selectedRegion.value = region;
}

// Update the search query
function updateSearchQuery(query) {
  searchQuery.value = query;
}
</script>

<template>
    <div class="flex flex-col justify-between items-start sm:flex-row sm:items-center">
        <Search 
            :countrySearch="searchQuery" 
            @updateSearch="updateSearchQuery"
        />
        <SelectRegion 
            :selectedRegion="selectedRegion" 
            @updateRegion="updateSelectedRegion" 
        />
    </div>
    {{ searchQuery }}
    <CountriesList 
        :selectedRegion="selectedRegion"
        :searchQuery="searchQuery"
    />
</template>