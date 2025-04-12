<template>
  <div class="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
    <!-- Static Google Map Image -->
    <img
      src="https://maps.googleapis.com/maps/api/staticmap?center=Ljubljana,Slovenia&zoom=13&size=600x400&maptype=roadmap&markers=color:red%7Clabel:P%7CLjubljana,Slovenia&key=YOUR_GOOGLE_MAPS_API_KEY"
      alt="Map of Ljubljana showing PetSalon location"
      class="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
    <!-- You need to replace YOUR_GOOGLE_MAPS_API_KEY with your actual API key -->
  </div>
</template>

<script setup lang="ts">
// No script needed for static map image
</script>

<style>
/* No specific styles needed for static map image beyond Tailwind classes */
</style>
