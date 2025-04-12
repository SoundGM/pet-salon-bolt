<script setup lang="ts">
      import type { Link } from '~/types' // Assuming you have a types file or define it here

      defineProps<{
        links: Link[]
      }>()

      const emit = defineEmits<{ close: [value: boolean] }>()

      function handleLinkClick() {
        emit('close', false) // Close the slideover when a link is clicked
      }
    </script>

    <template>
      <USlideover
        :close="{ onClick: () => emit('close', false) }"
        side="right"
        class="w-full max-w-xs"
      >
        <template #header>
          <div class="flex justify-end items-center w-full">
            <h1 class="mr-auto font-bold text-primary-500 text-xl">PetSalon</h1>
            <UButton
              color="neutral"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="emit('close', false)"
            />
          </div>
        </template>

        <template #body>
          <nav class="flex flex-col space-y-3 p-4">
            <UButton
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              variant="link"
              color="neutral"
              class="justify-start px-0 font-semibold text-neutral-700 hover:text-primary-600 text-base"
              @click="handleLinkClick"
            >
              {{ link.label }}
            </UButton>
            <!-- Add the Contact Us button separately if needed -->
            <UButton
              to="#contact"
              label="Kontakt"
              color="primary"
              variant="link"
              class="mx-0 mt-0 px-0 font-semibold text-base"
              @click="handleLinkClick"
            />
          </nav>
        </template>
      </USlideover>
    </template>
