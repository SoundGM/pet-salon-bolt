<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'

  const announcements = [
    '✨ Special Offer: 10% off first grooming! ✨',
    '🐶 Book your holiday appointment today! 🎄',
    '🐾 New spa treatments available now! 🛁',
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
    intervalId = setInterval(rotateAnnouncements, 5000) // Rotate every 5 seconds
  })

  onUnmounted(() => {
    if (intervalId) {
      clearInterval(intervalId)
    }
  })
</script>

<template>
  <div
    class="top-0 right-0 left-0 z-40 fixed bg-primary-500 text-white h-10 flex items-center"
  >
    <UContainer class="flex justify-between items-center w-full">
      <!-- Rotating Announcement Text -->
      <div class="flex-1 text-center md:text-left overflow-hidden h-6">
        <Transition name="fade" mode="out-in">
          <span :key="currentAnnouncementIndex" class="block text-sm">
            {{ currentAnnouncement }}
          </span>
        </Transition>
      </div>

      <!-- Contact Info -->
      <div class="hidden md:flex items-center space-x-4 text-sm">
        <a href="tel:555-123-4567" class="flex items-center hover:underline">
          <UIcon name="i-heroicons-phone" class="mr-1 size-4" />
          (555) 123-4567
        </a>
        <a
          href="mailto:info@petsalon.example"
          class="flex items-center hover:underline"
        >
          <UIcon name="i-heroicons-envelope" class="mr-1 size-4" />
          info@petsalon.example
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
