<script setup lang="ts">
  defineProps<{
    title: string
    description: string
    imageUrl: string
  }>()
</script>

<template>
  <div
    class="group relative shadow-lg hover:shadow-2xl rounded-[calc(var(--ui-radius)*2)] aspect-[4/3] overflow-hidden transition-all duration-300 ease-in-out cursor-pointer hover:-rotate-1 hover:scale-105"
  >
    <!-- Image Background - Removed blur -->
    <NuxtImg
      :src="imageUrl"
      :alt="title"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out"
      width="400"
      height="300"
      loading="lazy"
    />

    <!-- Overlay - Updated gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-primary-800/80 via-primary-800/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"
    ></div>

    <!-- Text Content -->
    <div class="right-0 bottom-0 left-0 absolute p-4 sm:p-6 text-white">
      <h3 class="mb-1 font-semibold text-xl lg:text-2xl">{{ title }}</h3>
      <p class="opacity-90 text-sm lg:text-base">{{ description }}</p>
    </div>
  </div>
</template>
