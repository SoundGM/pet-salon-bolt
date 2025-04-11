<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'

  const links = [
    { label: 'About Us', to: '#about' },
    { label: 'Services', to: '#services' },
    { label: 'Testimonials', to: '#testimonials' }, // Added Testimonials link
    { label: 'Why Us', to: '#why-us' },
    { label: 'Contact', to: '#contact' },
  ]

  const isScrolled = ref(false)

  const handleScroll = () => {
    // Threshold slightly increased to avoid flickering on some browsers/devices
    // Adjust threshold based on banner height (40px = 2.5rem)
    isScrolled.value = window.scrollY > 40
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    // Initial check in case the page loads already scrolled
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<template>
  <header
    class="right-0 left-0 z-50 fixed transition-all duration-300 ease-in-out"
    :class="{
      'bg-white shadow-md top-0': isScrolled, // Becomes sticky at the top when scrolled
      'bg-transparent shadow-none top-10': !isScrolled, // Positioned below banner initially
    }"
  >
    <UContainer class="flex justify-between items-center h-16">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="font-bold text-xl transition-colors duration-300"
        :class="isScrolled ? 'text-primary-500' : 'text-primary-800'"
      >
        PetSalon
      </NuxtLink>

      <!-- Navigation Links (Desktop) -->
      <nav class="flex items-center space-x-4">
        <UButton
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          variant="link"
          :color="isScrolled ? 'neutral' : 'primary'"
          class="font-semibold text-base transition-colors duration-300"
          :class="{
            'text-neutral-600 hover:text-primary-500': isScrolled,
            'text-primary-800 hover:text-primary-600': !isScrolled,
          }"
        >
          {{ link.label }}
        </UButton>
        <UButton
          to="#booking"
          label="Book Now"
          color="primary"
          variant="solid"
          :class="{ 'shadow-sm': !isScrolled }"
          class="transition-shadow duration-300"
        />
      </nav>
    </UContainer>
  </header>
</template>
