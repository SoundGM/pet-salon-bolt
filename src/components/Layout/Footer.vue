<script setup lang="ts">
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Home', to: '#home' },
    { label: 'About Us', to: '#about' },
    { label: 'Services', to: '#services' },
    { label: 'Reviews', to: '#testimonials' },
    { label: 'Why Us', to: '#why-us' },
    { label: 'Contact', to: '#contact' },
  ]

  const newsletterEmail = ref('')

  function subscribeNewsletter() {
    console.log('Subscribing:', newsletterEmail.value)
    // TODO: Implement newsletter subscription logic
    // Example:
    // const toast = useToast()
    // toast.add({ title: 'Subscribed!', description: 'Thank you for subscribing.' })
    // newsletterEmail.value = ''
  }
</script>

<template>
  <footer class="bg-mon-yellow-400 pt-20 pb-10 text-neutral-700">
    <UContainer class="flex flex-col">
      <!-- Part 1: Newsletter Card -->
      <UCard class="bg-primary-500 mb-10 rounded-2xl">
        <div class="flex md:flex-row flex-col justify-between items-center">
          <p
            class="md:mr-6 mb-6 md:mb-0 font-semibold text-white text-lg md:text-xl md:text-left text-center"
          >
            Don't miss the latest tips for grooming your pet
          </p>
          <UCard class="w-full max-w-md">
            <form
              class="flex items-center gap-2"
              @submit.prevent="subscribeNewsletter"
            >
              <UInput
                v-model="newsletterEmail"
                type="email"
                placeholder="Enter your email address"
                required
                class="flex-1"
                size="xl"
              />
              <UButton
                type="submit"
                label="Subscribe"
                color="primary"
                size="xl"
                trailing-icon="i-mingcute-mail-line"
              />
            </form>
          </UCard>
        </div>
      </UCard>

      <!-- Part 2: Links -->
      <div class="flex md:flex-row flex-col justify-between items-center mb-10">
        <!-- Navigation Links -->
        <nav
          class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 mb-4 md:mb-0"
        >
          <UButton
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            variant="link"
            color="primary"
            class="px-0 py-1 font-normal hover:text-primary-600 text-base transition-colors duration-200"
          >
            {{ link.label }}
          </UButton>
        </nav>
        <!-- Social Media Links -->
        <div class="flex items-center space-x-4">
          <UButton
            to="https://www.facebook.com/PasjisalonSpela"
            target="_blank"
            aria-label="Facebook"
            variant="link"
            color="primary"
            icon="i-simple-icons-facebook"
            class="p-1"
          />
          <UButton
            to="#"
            aria-label="Instagram"
            variant="link"
            color="primary"
            icon="i-simple-icons-instagram"
            class="p-1"
          />
          <!-- Add more social icons as needed -->
        </div>
      </div>

      <!-- Part 3: Bottom Bar -->
      <div
        class="flex md:flex-row flex-col justify-between items-center pt-10 border-neutral-200 border-t text-neutral-500 text-sm"
      >
        <p class="mb-2 md:mb-0">
          &copy; {{ currentYear }} Your Pet Groomer. All rights reserved.
        </p>
        <NuxtLink
          to="/"
          class="mb-2 md:mb-0 font-bold text-primary-500 text-lg"
        >
          Your Pet Groomer
        </NuxtLink>
        <div class="flex gap-4">
          <NuxtLink to="/privacy" class="hover:text-primary-500">
            Privacy Policy
          </NuxtLink>
          <NuxtLink to="/terms" class="hover:text-primary-500">
            Terms of Use
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
