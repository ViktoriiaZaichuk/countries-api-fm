<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

// Define props to receive the selected region from the parent component
const props = defineProps({
  selectedRegion: String,
});

// Define emits to notify the parent component of region updates
const emit = defineEmits(['updateRegion']);

// Create a local ref to manage the select dropdown's value
const selectedRegionLocal = ref(props.selectedRegion);

// Watch for changes in the local selected region and emit the update to the parent
watch(selectedRegionLocal, (newValue) => {
  emit('updateRegion', newValue);
});

// Function to notify parent when selection changes
function notifyParent() {
  emit('updateRegion', selectedRegionLocal.value);
}
</script>

<template>
    <div>
        <select 
            v-model="selectedRegionLocal" 
            @change="notifyParent"
        >
          <option value="Filter by Region">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      
        <!-- Display the selected value for debugging purposes -->
        <p>Selected Region: {{ selectedRegion }}</p>
    </div>
</template>