<script setup lang="ts"></script>

<template>
  <div class="flex flex-col bg-secondary-400 min-h-screen">
    <LayoutAnnouncementBanner />
    <LayoutHeader />
    <!-- Added padding-top to account for banner (h-10) and header (h-16) -->
    <UApp>
      <main class="flex-grow pt-26">
        <slot />
      </main>
    </UApp>
    <LayoutFooter />
    <!-- Add the Footer component -->
  </div>
</template>
