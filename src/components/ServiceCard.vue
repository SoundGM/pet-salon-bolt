<script setup lang="ts">
  defineProps<{
    title: string
    description: string
    imageUrl: string
  }>()
</script>

<template>
  <div
    class="group relative shadow-md hover:shadow-xl rounded-[calc(var(--ui-radius)*2)] aspect-[4/3] overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
  >
    <!-- Image Background -->
    <NuxtImg
      :src="imageUrl"
      :alt="title"
      class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
      width="400"
      height="200"
      loading="lazy"
    />

    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
    ></div>

    <!-- Text Content -->
    <div class="right-0 bottom-0 left-0 absolute p-4 sm:p-6 text-white">
      <h3 class="mb-1 font-semibold text-xl lg:text-2xl">{{ title }}</h3>
      <p class="opacity-90 text-sm lg:text-base">{{ description }}</p>
    </div>
  </div>
</template>
