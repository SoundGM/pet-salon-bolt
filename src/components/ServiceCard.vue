<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string // Heroicon name (e.g., 'i-heroicons-sparkles')
}>()
</script>

<template>
  <UCard class="text-center h-full flex flex-col"> <!-- Added h-full and flex flex-col for consistent height -->
    <template #header>
      <div class="flex justify-center mb-4">
        <UIcon :name="icon" class="text-4xl text-primary-500" />
      </div>
      <h3 class="text-xl font-semibold text-neutral-800">{{ title }}</h3>
    </template>
    <p class="text-neutral-600 flex-grow">{{ description }}</p> <!-- Added flex-grow to push button down -->
    <!-- Optional: Add a button/link for more details -->
    <!-- <UButton label="Learn More" variant="link" class="mt-4" /> -->
  </UCard>
</template>
