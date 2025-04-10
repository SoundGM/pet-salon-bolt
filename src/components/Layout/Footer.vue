<script setup lang="ts">
const currentYear = new Date().getFullYear()

const links = [
  { label: 'Home', to: '#home' },
  { label: 'About Us', to: '#about' },
  { label: 'Services', to: '#services' },
  { label: 'Contact', to: '#contact' },
  { label: 'Book Now', to: '#booking' },
]
</script>

<template>
  <footer class="bg-neutral-800 text-neutral-300 py-8">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- About/Brand -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-3">PetSalon</h4>
          <p class="text-sm">
            Providing top-notch grooming services with love and care for your
            furry friends.
          </p>
          <!-- Optional: Add Logo here -->
          <!-- <NuxtLink to="/" class="inline-block mt-2">
            <img src="/logo-white.svg" alt="PetSalon Logo" class="h-8">
          </NuxtLink> -->
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul class="space-y-2 text-sm">
            <li v-for="link in links" :key="link.to">
              <NuxtLink :to="link.to" class="hover:text-primary-300 transition-colors duration-200">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-3">Contact Us</h4>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center">
              <UIcon name="i-heroicons-map-pin" class="mr-2 flex-shrink-0" />
              <span>123 Pet Lane, Dogtown, CT 06040</span>
            </li>
            <li class="flex items-center">
              <UIcon name="i-heroicons-phone" class="mr-2 flex-shrink-0" />
              <a href="tel:5551234567" class="hover:text-primary-300 transition-colors duration-200">(555) 123-4567</a>
            </li>
            <li class="flex items-center">
              <UIcon name="i-heroicons-envelope" class="mr-2 flex-shrink-0" />
              <a href="mailto:info@petsalon.example" class="hover:text-primary-300 transition-colors duration-200">info@petsalon.example</a>
            </li>
             <li class="flex items-center">
              <UIcon name="i-heroicons-clock" class="mr-2 flex-shrink-0" />
              <span>Mon-Fri: 9am-6pm, Sat: 10am-4pm</span>
            </li>
            <!-- Add Social Media Links if needed -->
            <!-- <li class="flex items-center space-x-3 mt-3">
              <a href="#" aria-label="Facebook" class="text-neutral-400 hover:text-white transition-colors duration-200"><UIcon name="i-simple-icons-facebook" class="w-5 h-5" /></a>
              <a href="#" aria-label="Instagram" class="text-neutral-400 hover:text-white transition-colors duration-200"><UIcon name="i-simple-icons-instagram" class="w-5 h-5" /></a>
            </li> -->
          </ul>
        </div>
      </div>

      <hr class="border-neutral-700 my-6" />

      <div class="text-center text-sm text-neutral-400">
        &copy; {{ currentYear }} PetSalon. All rights reserved.
        <!-- Optional: Add links to Privacy Policy / Terms of Service -->
        <!-- <span class="mx-2">|</span>
        <NuxtLink to="/privacy" class="hover:text-white">Privacy Policy</NuxtLink> -->
      </div>
    </UContainer>
  </footer>
</template>
