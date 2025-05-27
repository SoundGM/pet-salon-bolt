<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'

  const announcements = [
    '✨ Special Offer: 10% off your first groom! ✨',
    '🐶 Book your holiday appointment today! 🎄',
    '🐾 New spa treatments now available! 🛁',
  ]

  const currentAnnouncementIndex = ref(0)
  let intervalId: ReturnType<typeof setInterval> | null = null

  const currentAnnouncement = computed(
    () => announcements[currentAnnouncementIndex.value]
  )

  function rotateAnnouncements() {
    currentAnnouncementIndex.value =
      (currentAnnouncementIndex.value + 1) % announcements.length
  }

  onMounted(() => {
    intervalId = setInterval(rotateAnnouncements, 5000) // Change every 5 seconds
  })

  onUnmounted(() => {
    if (intervalId) {
      clearInterval(intervalId)
    }
  })
</script>

<template>
  <div
    class="top-0 right-0 left-0 z-40 fixed flex items-center bg-primary-500 h-10 text-white"
  >
    <UContainer class="flex justify-between items-center w-full">
      <!-- Rotating Announcement Text -->
      <div class="flex-1 h-6 overflow-hidden md:text-left text-center">
        <Transition name="fade" mode="out-in">
          <span :key="currentAnnouncementIndex" class="block text-sm">
            {{ currentAnnouncement }}
          </span>
        </Transition>
      </div>

      <!-- Contact Information -->
      <div class="hidden md:flex items-center space-x-4 text-sm">
        <a href="tel:02079460123" class="flex items-center hover:underline">
          <UIcon name="i-heroicons-phone" class="mr-1 size-4" />
          020 7946 0123
        </a>
        <a
          href="mailto:info@yourpetgroomer.com"
          class="flex items-center hover:underline"
        >
          <UIcon name="i-heroicons-envelope" class="mr-1 size-4" />
          info@yourpetgroomer.com
        </a>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
