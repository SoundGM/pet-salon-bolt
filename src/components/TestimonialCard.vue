<script setup lang="ts">
  defineProps<{
    name: string
    rating: number // Expecting a number from 1 to 5
    comment: string
    rotationClass: string // Class for rotation (e.g., 'rotate-1', '-rotate-2')
    colorClass: string // Class for border color (e.g., 'border-primary-500', 'border-secondary-500')
  }>()

  const maxRating = 5
</script>

<template>
  <div
    :class="[
      'bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-2 transition-all duration-300 transform',
      rotationClass,
      `hover:${colorClass}`,
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
