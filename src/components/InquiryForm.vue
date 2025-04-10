<script setup lang="ts">
  import { ref } from 'vue'
  // import { z } from 'zod' // Zod validation commented out as per user update
  import type { FormSubmitEvent } from '#ui/types'

  // const schema = z.object({
  //   name: z.string().min(1, 'Name is required'),
  //   email: z.string().email('Invalid email address'),
  //   phone: z.string().optional(),
  //   petName: z.string().optional(),
  //   service: z.string().min(1, 'Please select a service'),
  //   message: z.string().min(10, 'Message must be at least 10 characters'),
  // })

  // type Schema = z.output<typeof schema> // Type derived from Zod schema also commented out

  const state = ref({
    name: undefined,
    email: undefined,
    phone: undefined,
    petName: undefined,
    service: undefined,
    message: undefined,
  })

  const services = ['Full Grooming', 'Bath & Brush', 'Nail Trim', 'Other'] // Example services

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function handleSubmit(event: FormSubmitEvent<typeof state.value>) {
    // Use typeof state.value for event type
    // TODO: Implement form submission logic (e.g., send to an API endpoint)
    console.log('Form submitted:', event.data)
    // Add logic here: e.g., show a success toast, clear the form
    // Example:
    // const toast = useToast()
    // toast.add({ title: 'Inquiry Sent!', description: 'We will get back to you soon.' })
    // state.value = { name: undefined, email: undefined, phone: undefined, petName: undefined, service: undefined, message: undefined }
  }
</script>

<template>
  <!-- Removed :schema="schema" prop as Zod is commented out -->
  <UForm :state="state" class="space-y-4" @submit="handleSubmit">
    <UFormField label="Your Name" name="name" required>
      <UInput v-model="state.name" placeholder="Jane Doe" />
    </UFormField>

    <UFormField label="Email" name="email" required>
      <UInput
        v-model="state.email"
        type="email"
        placeholder="you@example.com"
      />
    </UFormField>

    <UFormField label="Phone (Optional)" name="phone">
      <UInput v-model="state.phone" type="tel" placeholder="(555) 123-4567" />
    </UFormField>

    <UFormField label="Pet's Name (Optional)" name="petName">
      <UInput v-model="state.petName" placeholder="Buddy" />
    </UFormField>

    <UFormField label="Service Needed" name="service" required>
      <USelect
        v-model="state.service"
        :options="services"
        placeholder="Select a service"
      />
    </UFormField>

    <UFormField
      label="Your Message / Preferred Date & Time"
      name="message"
      required
    >
      <UTextarea
        v-model="state.message"
        placeholder="Tell us about your pet's needs or preferred appointment time..."
      />
    </UFormField>

    <UButton
      type="submit"
      label="Send Inquiry"
      color="primary"
      size="lg"
      block
      class="hover:scale-105 transition-transform duration-300 transform"
    />
  </UForm>
</template>
