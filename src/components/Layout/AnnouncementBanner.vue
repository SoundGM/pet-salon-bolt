<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'

  const announcements = [
    '✨ Posebna Ponudba: 10% popusta na prvo nego! ✨',
    '🐶 Rezervirajte svoj praznični termin še danes! 🎄',
    '🐾 Nove spa nege so zdaj na voljo! 🛁',
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
    intervalId = setInterval(rotateAnnouncements, 5000) // Zamenjaj vsakih 5 sekund
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
      <!-- Vrteče se Besedilo Obvestila -->
      <div class="flex-1 text-center md:text-left overflow-hidden h-6">
        <Transition name="fade" mode="out-in">
          <span :key="currentAnnouncementIndex" class="block text-sm">
            {{ currentAnnouncement }}
          </span>
        </Transition>
      </div>

      <!-- Kontaktne Informacije -->
      <div class="hidden md:flex items-center space-x-4 text-sm">
        <a href="tel:01-123-4567" class="flex items-center hover:underline">
          <UIcon name="i-heroicons-phone" class="mr-1 size-4" />
          (01) 123-4567
        </a>
        <a
          href="mailto:info@petsalon.primer"
          class="flex items-center hover:underline"
        >
          <UIcon name="i-heroicons-envelope" class="mr-1 size-4" />
          info@petsalon.primer
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
