<script setup lang="ts">
  import { ref } from 'vue'
  // import { z } from 'zod' // Zod validation commented out per user update
  import type { FormSubmitEvent } from '#ui/types'

  // const schema = z.object({
  // name: z.string().min(1, 'Name is required'),
  // email: z.string().email('Invalid email address'),
  // phone: z.string().optional(),
  // petName: z.string().optional(),
  // service: z.string().min(1, 'Please select a service'),
  //   message: z.string().min(10, 'Message must contain at least 10 characters'),
  // })

  // type Schema = z.output<typeof schema> // Type derived from Zod schema, also commented out

  const state = ref({
    name: undefined,
    email: undefined,
    phone: undefined,
    petName: undefined,
    service: undefined,
    message: undefined,
  })

  const services = [
    'Full Groom',
    'Bath and Brush',
    'Nail Clipping',
    'General Inquiry', // Added General Inquiry
    'Other',
  ]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function handleSubmit(event: FormSubmitEvent<typeof state.value>) {
    // Use typeof state.value for event type
    // TODO: Implement form submission logic (e.g., sending to API endpoint)
    console.log('Form submitted:', event.data)
    // Add logic here: e.g., show success notification, clear form
    // Example:
    // const toast = useToast()
    // toast.add({ title: 'Message Sent!', description: 'We will get back to you soon.' })
    // state.value = { name: undefined, email: undefined, phone: undefined, petName: undefined, service: undefined, message: undefined }
  }
</script>

<template>
  <!-- Removed :schema="schema" prop as Zod is commented out -->
  <UForm :state="state" class="flex flex-col space-y-4" @submit="handleSubmit">
    <UFormField label="Your Name" name="name" required>
      <UInput
        v-model="state.name"
        placeholder="Jane Doe"
        class="w-full"
        size="xl"
      />
    </UFormField>

    <UFormField label="Email" name="email" required>
      <UInput
        v-model="state.email"
        type="email"
        placeholder="you@example.com"
        class="w-full"
        size="xl"
      />
    </UFormField>

    <UFormField label="Phone (Optional)" name="phone">
      <UInput
        v-model="state.phone"
        type="tel"
        placeholder="(020) 1234-5678"
        class="w-full"
        size="xl"
      />
    </UFormField>

    <UFormField label="Pet's Name (Optional)" name="petName">
      <UInput
        v-model="state.petName"
        placeholder="Buddy"
        class="w-full"
        size="xl"
      />
    </UFormField>

    <UFormField label="Service Subject (Optional)" name="service">
      <!-- Changed label and made optional -->
      <USelect
        v-model="state.service"
        :options="services"
        placeholder="Select service or inquiry type"
        class="w-full"
        size="xl"
      />
    </UFormField>

    <UFormField label="Your Message" name="message" required>
      <UTextarea
        v-model="state.message"
        placeholder="How can we help you today?"
        class="w-full"
        size="xl"
      />
    </UFormField>

    <UButton
      type="submit"
      label="Send Message"
      color="primary"
      size="xl"
      block
      class="flex-1 py-3 font-semibold hover:scale-105 transition-transform duration-300 transform"
    />
  </UForm>
</template>
