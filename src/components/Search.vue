<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

// Define props to receive the typed name of the country
const props = defineProps({
  countrySearch: String,
});

// Define emits to notify the parent component of search updates
const emit = defineEmits(['updateSearch']);

// Create a local ref to manage the search input value
const searchInput = ref(props.countrySearch);

// Watch for changes in the local search input and emit the update to the parent
watch(searchInput, (newValue) => {
  emit('updateSearch', newValue);
});

// Function to notify parent when search input changes
function notifyParent() {
  emit('updateSearch', searchInput.value);
} 
</script>

<template>
    <div class="flex">
        <input 
            @input="notifyParent"
            v-model="searchInput"
            type="search"
            placeholder="Search for a country…"
            aria-label="Search countries"
            class="bg-very-light-gray-lm dark:bg-very-dark-blue-dm text-very-dark-blue-dm dark:text-white"
        >
    </div>
</template>