<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import NavigationMenu from '~/components/NavigationMenu.vue'

  const links = [
    { label: 'O Nas', to: '#about' },
    { label: 'Storitve', to: '#services' },
    { label: 'Mnenja', to: '#testimonials' }, // Changed from Mnenja Strank
    { label: 'Zakaj Mi', to: '#why-us' },
    // Odstranjena povezava 'Kontakt', ker je gumb posebej
  ]

  const isScrolled = ref(false)
  const overlay = useOverlay() // Inicializiraj useOverlay

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 40
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  const slideover = overlay.create(NavigationMenu, {
    props: {
      links: links,
    },
  })

  async function openMobileMenu() {
    slideover.open()
  }
</script>

<template>
  <header
    class="right-0 left-0 z-50 fixed transition-all duration-300 ease-in-out"
    :class="{
      'bg-white shadow-md top-0': isScrolled, // Postane lepljiv na vrhu ob drsenju
      'bg-transparent shadow-none top-10': !isScrolled, // Sprva postavljen pod pasico
    }"
  >
    <UContainer class="flex justify-between items-center h-16">
      <!-- Logotip -->
      <NuxtLink
        to="/"
        class="font-bold text-xl transition-colors duration-300"
        :class="isScrolled ? 'text-primary-500' : 'text-primary-800'"
      >
        Pasji Salon
      </NuxtLink>

      <!-- Navigacijske Povezave (Namizje) -->
      <nav class="hidden md:flex items-center space-x-4">
        <!-- Skrij na majhnih zaslonih -->
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
          to="#contact"
          label="Kontakt"
          color="primary"
          variant="solid"
          :class="{ 'shadow-sm': !isScrolled }"
          class="font-semibold transition-shadow duration-300"
        />
      </nav>

      <!-- Gumb za Mobilni Meni -->
      <div class="md:hidden">
        <UButton
          icon="i-heroicons-bars-3"
          :color="isScrolled ? 'neutral' : 'primary'"
          variant="ghost"
          @click="openMobileMenu"
        />
      </div>
    </UContainer>
  </header>
</template>
