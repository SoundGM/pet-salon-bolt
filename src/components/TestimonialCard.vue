<script setup lang="ts">
  defineProps<{
    name: string
    rating: number // Expecting a number from 1 to 5
    comment: string
    rotationClass: string // Class for rotation (e.g., 'rotate-1', '-rotate-2')
    // colorClass removed as border is no longer applied on hover
  }>()

  const maxRating = 5
</script>

<template>
  <div
    :class="[
      'bg-white p-6 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform', // Removed border classes, increased hover shadow
      rotationClass,
    ]"
  >
    <div class="flex items-center mb-2">
      <span class="font-semibold text-neutral-800">{{ name }}</span>
      <div class="flex ms-auto">
        <UIcon
          v-for="i in rating"
          :key="`filled-${i}`"
          name="i-heroicons-star-solid"
          class="text-orange-shine-500 size-5"
        />
        <UIcon
          v-for="i in maxRating - rating"
          :key="`empty-${i}`"
          name="i-heroicons-star"
          class="text-neutral-300 size-5"
        />
      </div>
    </div>
    <p class="text-neutral-700 text-base italic">"{{ comment }}"</p>
  </div>
</template>
