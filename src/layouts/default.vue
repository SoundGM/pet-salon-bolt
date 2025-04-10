<script setup lang="ts">
    import SiteHeader from '~/components/Layout/Header.vue'
    import SiteFooter from '~/components/Layout/Footer.vue' // Import the Footer
    </script>

    <template>
      <div class="flex flex-col min-h-screen">
        <SiteHeader />
        <!-- Removed pt-16 from main element -->
        <main class="flex-grow">
          <slot />
        </main>
        <SiteFooter /> <!-- Add the Footer component -->
      </div>
    </template>
