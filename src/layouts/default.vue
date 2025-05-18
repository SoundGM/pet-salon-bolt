<script setup lang="ts">
  import * as locales from '@nuxt/ui/locale'

  const { locale } = useI18n()
</script>

<template>
  <div class="flex flex-col bg-secondary-400 min-h-screen">
    <LayoutAnnouncementBanner />
    <LayoutHeader />
    <!-- Added padding-top to account for banner (h-10) and header (h-16) -->
    <UApp :locale="locales[locale]">
      <main class="flex-grow pt-26">
        <slot />
      </main>
    </UApp>
    <LayoutFooter />
    <!-- Add the Footer component -->
  </div>
</template>
