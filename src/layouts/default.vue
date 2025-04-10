<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-screen">
    <LayoutHeader />
    <!-- Removed pt-16 from main element -->
    <main class="flex-grow">
      <slot />
    </main>
    <LayoutFooter />
    <!-- Add the Footer component -->
  </div>
</template>
