<script setup lang="ts">
  import { ref } from 'vue'
  // import { z } from 'zod' // Zod validacija zakomentirana po posodobitvi uporabnika
  import type { FormSubmitEvent } from '#ui/types'

  // const schema = z.object({
  //   name: z.string().min(1, 'Ime je obvezno'),
  //   email: z.string().email('Neveljaven e-poštni naslov'),
  //   phone: z.string().optional(),
  //   petName: z.string().optional(),
  //   service: z.string().min(1, 'Prosimo, izberite storitev'),
  //   message: z.string().min(10, 'Sporočilo mora vsebovati vsaj 10 znakov'),
  // })

  // type Schema = z.output<typeof schema> // Tip, izpeljan iz Zod sheme, prav tako zakomentiran

  const state = ref({
    name: undefined,
    email: undefined,
    phone: undefined,
    petName: undefined,
    service: undefined,
    message: undefined,
  })

  const services = [
    'Popolna Nega',
    'Kopel in Krtačenje',
    'Krajšanje Krempljev',
    'Splošno Povpraševanje', // Dodano Splošno Povpraševanje
    'Drugo',
  ]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function handleSubmit(event: FormSubmitEvent<typeof state.value>) {
    // Uporabi typeof state.value za tip dogodka
    // TODO: Implementiraj logiko oddaje obrazca (npr. pošiljanje na API končno točko)
    console.log('Obrazec oddan:', event.data)
    // Dodaj logiko tukaj: npr. prikaži obvestilo o uspehu, počisti obrazec
    // Primer:
    // const toast = useToast()
    // toast.add({ title: 'Sporočilo Poslano!', description: 'Kmalu vam bomo odgovorili.' })
    // state.value = { name: undefined, email: undefined, phone: undefined, petName: undefined, service: undefined, message: undefined }
  }
</script>

<template>
  <!-- Odstranjen :schema="schema" prop, ker je Zod zakomentiran -->
  <UForm :state="state" class="flex flex-col space-y-4" @submit="handleSubmit">
    <UFormField label="Vaše Ime" name="name" required>
      <UInput
        v-model="state.name"
        placeholder="Ana Novak"
        class="w-full"
        size="xl"
      />
    </UFormField>

    <UFormField label="E-pošta" name="email" required>
      <UInput
        v-model="state.email"
        type="email"
        placeholder="vi@primer.com"
        class="w-full"
        size="xl"
      />
    </UFormField>

    <UFormField label="Telefon (Neobvezno)" name="phone">
      <UInput
        v-model="state.phone"
        type="tel"
        placeholder="(01) 123-4567"
        class="w-full"
        size="xl"
      />
    </UFormField>

    <UFormField label="Ime Ljubljenčka (Neobvezno)" name="petName">
      <UInput
        v-model="state.petName"
        placeholder="Piki"
        class="w-full"
        size="xl"
      />
    </UFormField>

    <UFormField label="Zadeva Storitve (Neobvezno)" name="service">
      <!-- Spremenjena oznaka in narejeno neobvezno -->
      <USelect
        v-model="state.service"
        :options="services"
        placeholder="Izberite storitev ali vrsto povpraševanja"
        class="w-full"
        size="xl"
      />
    </UFormField>

    <UFormField label="Vaše Sporočilo" name="message" required>
      <UTextarea
        v-model="state.message"
        placeholder="Kako vam lahko danes pomagamo?"
        class="w-full"
        size="xl"
      />
    </UFormField>

    <UButton
      type="submit"
      label="Pošlji Sporočilo"
      color="primary"
      size="xl"
      block
      class="flex-1 py-3 font-semibold hover:scale-105 transition-transform duration-300 transform"
    />
  </UForm>
</template>
