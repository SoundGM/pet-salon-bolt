<script setup lang="ts">
  import ServiceCard from '~/components/ServiceCard.vue'
  import InquiryForm from '~/components/InquiryForm.vue'

  // Example data - replace with actual content
  const services = [
    {
      title: 'Full Grooming',
      description:
        'Complete pampering including bath, haircut, nail trim, and ear cleaning.',
      icon: 'i-heroicons-sparkles',
    },
    {
      title: 'Bath & Brush',
      description:
        'A refreshing bath and thorough brushing to keep the coat healthy.',
      icon: 'i-heroicons-swatch', // Example icon, choose appropriate ones
    },
    {
      title: 'Nail Trimming',
      description: 'Safe and gentle nail clipping for comfort and health.',
      icon: 'i-heroicons-scissors', // Example icon
    },
    {
      title: 'Puppy Intro',
      description: 'Gentle introduction to grooming for young pups.',
      icon: 'i-heroicons-heart', // Example icon
    },
  ]

  const whyUsPoints = [
    {
      title: 'Experienced Groomers',
      description:
        'Our team has years of experience handling pets of all breeds and temperaments.',
      icon: 'i-heroicons-user-group',
    },
    {
      title: 'Pet-Friendly Environment',
      description:
        "We maintain a calm, clean, and safe space for your pet's comfort.",
      icon: 'i-heroicons-home-modern',
    },
    {
      title: 'Quality Products',
      description:
        'We use only high-quality, pet-safe shampoos and grooming tools.',
      icon: 'i-heroicons-check-badge',
    },
  ]
</script>

<template>
  <div>
    <!-- Hero Section - Redesigned -->
    <section
      id="home"
      class="relative flex items-center bg-secondary-400 px-4 py-20 pt-24 md:pt-32 min-h-screen overflow-hidden"
    >
      <div
        class="top-7 left-[40%] z-0 absolute bg-primary-500 opacity-90 rounded-2xl size-12 rotate-12 transform"
      ></div>
      <div
        class="top-12 left-[44%] z-0 absolute bg-secondary-500 opacity-90 rounded-2xl size-16 rotate-45 transform"
      ></div>
      <div
        class="top-[10%] left-[5%] z-0 absolute bg-primary-500 opacity-90 rounded-4xl size-[100px] rotate-40 transform"
      ></div>
      <div
        class="top-[30%] right-[15%] z-0 absolute bg-secondary-500 opacity-90 rounded-4xl size-[120px] rotate-20 transform"
      ></div>
      <div
        class="bottom-[20%] left-[20%] z-0 absolute bg-secondary-500 opacity-90 rounded-4xl size-[80px] rotate-60 transform"
      ></div>
      <div
        class="right-[5%] bottom-[11%] z-0 absolute bg-secondary-500 rounded-2xl size-[50px] rotate-20 transform"
      ></div>
      <div
        class="right-[5%] bottom-[10%] z-0 absolute bg-primary-500 rounded-2xl size-[40px] -rotate-40 transform"
      ></div>

      <UContainer class="z-10 relative items-center gap-12 grid md:grid-cols-2">
        <!-- Left Column: Text & Button -->
        <div class="relative text-left">
          <!-- Decorative Shapes - Updated -->
          <div
            class="-top-[100px] -left-12 z-0 absolute bg-secondary-500 opacity-90 rounded-2xl size-40 rotate-45 transform"
          ></div>
          <div
            class="-right-64 -bottom-64 z-0 absolute bg-primary-500 opacity-90 rounded-2xl size-44 rotate-12 transform"
          ></div>

          <!-- Content -->
          <div class="z-10 relative">
            <h1
              class="mb-4 font-bold text-primary-800 text-4xl md:text-6xl leading-tight"
            >
              Pamper Your Pet<br />Like Royalty
            </h1>
            <p class="mb-8 max-w-md text-neutral-700 text-lg md:text-xl">
              Expert grooming services with a gentle touch. We treat every pet
              like family.
            </p>
            <UButton
              to="#booking"
              label="Book an Appointment"
              size="xl"
              color="primary"
              variant="solid"
              class="px-8 py-3 font-semibold hover:scale-105 transition-transform duration-300 transform"
            />
          </div>
        </div>

        <!-- Right Column: Image -->
        <div class="relative flex justify-center items-center">
          <!-- Decorative background shape -->
          <div
            class="absolute inset-0 bg-white opacity-50 blur-xl rounded-full scale-110 transform"
          ></div>
          <NuxtImg
            src="/public/images/hero-dog.png"
            alt="Happy dog after 1"
            class="z-10 relative w-full max-w-md object-contain aspect-square"
          />
        </div>
      </UContainer>
    </section>

    <!-- About Us Section - White Background -->
    <section
      id="about"
      class="bg-white py-16 md:py-24 transition-opacity duration-500 ease-in"
    >
      <UContainer>
        <div class="items-center gap-12 grid md:grid-cols-2">
          <div>
            <NuxtImg
              src="https://picsum.photos/seed/petsalon_about/600/600"
              class="shadow-md rounded-lg w-full h-full object-cover aspect-square"
              width="600"
              height="600"
              loading="lazy"
            />
          </div>
          <div>
            <h2 class="mb-4 font-bold text-primary-800 text-3xl md:text-4xl">
              About PetSalon
            </h2>
            <p class="mb-4 text-neutral-600">
              Welcome to PetSalon, where passion for pets meets professional
              grooming. Founded in [Year], our mission has always been to
              provide a safe, comfortable, and happy grooming experience for
              every pet that walks through our doors.
            </p>
            <p class="mb-6 text-neutral-600">
              Our certified groomers are not only skilled in various grooming
              techniques but are also genuine animal lovers dedicated to your
              pet's well-being. We believe regular grooming is essential for a
              pet's health and happiness.
            </p>
            <UButton
              to="#services"
              label="Explore Our Services"
              variant="outline"
              color="primary"
              class="hover:scale-105 transition-transform duration-300 transform"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Services Section - Neutral Background -->
    <section
      id="services"
      class="bg-neutral-50 py-16 md:py-24 transition-opacity duration-500 ease-in"
    >
      <UContainer>
        <div class="mx-auto mb-12 max-w-2xl text-center">
          <h2 class="mb-4 font-bold text-primary-800 text-3xl md:text-4xl">
            Our Grooming Services
          </h2>
          <p class="text-neutral-600">
            We offer a range of services tailored to meet the unique needs of
            your pet. From basic baths to full haircuts, we do it all with care.
          </p>
        </div>
        <div class="gap-8 grid sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            v-for="service in services"
            :key="service.title"
            :title="service.title"
            :description="service.description"
            :icon="service.icon"
            class="transition-transform hover:-translate-y-2 duration-300 transform"
          />
        </div>
      </UContainer>
    </section>

    <!-- Why Choose Us Section - White Background -->
    <section
      id="why-us"
      class="bg-white py-16 md:py-24 transition-opacity duration-500 ease-in"
    >
      <UContainer>
        <div class="mx-auto mb-12 max-w-2xl text-center">
          <h2 class="mb-4 font-bold text-primary-800 text-3xl md:text-4xl">
            Why Choose PetSalon?
          </h2>
          <p class="text-neutral-600">
            We go the extra mile to ensure both you and your pet have a positive
            experience.
          </p>
        </div>
        <div class="gap-8 grid md:grid-cols-3">
          <div
            v-for="point in whyUsPoints"
            :key="point.title"
            class="bg-white hover:shadow-xl p-6 border border-neutral-200 rounded-lg text-center transition-all hover:-translate-y-1 duration-300 transform"
          >
            <UIcon
              :name="point.icon"
              class="mb-4 text-secondary-500 text-4xl"
            />
            <h3 class="mb-2 font-semibold text-neutral-800 text-xl">
              {{ point.title }}
            </h3>
            <p class="text-neutral-600 text-sm">{{ point.description }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Contact Section - Neutral Background -->
    <section
      id="contact"
      class="bg-neutral-50 py-16 md:py-24 transition-opacity duration-500 ease-in"
    >
      <UContainer>
        <div class="items-center gap-12 grid md:grid-cols-2">
          <div>
            <h2 class="mb-4 font-bold text-primary-800 text-3xl md:text-4xl">
              Get In Touch
            </h2>
            <p class="mb-6 text-neutral-600">
              Have questions or ready to book? Contact us today! We're happy to
              help.
            </p>
            <div class="space-y-4">
              <p class="flex items-center text-neutral-700">
                <UIcon
                  name="i-heroicons-map-pin"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                123 Pet Lane, Dogtown, CT 06040
              </p>
              <p class="flex items-center text-neutral-700">
                <UIcon
                  name="i-heroicons-phone"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                (555) 123-4567
              </p>
              <p class="flex items-center text-neutral-700">
                <UIcon
                  name="i-heroicons-envelope"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                info@petsalon.example
              </p>
              <p class="flex items-center text-neutral-700">
                <UIcon
                  name="i-heroicons-clock"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                Mon - Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
          <div>
            <NuxtImg
              src="https://picsum.photos/seed/petsalon_map/800/450"
              alt="Map showing PetSalon location"
              class="shadow-md rounded-lg w-full h-full object-cover aspect-video"
              width="800"
              height="450"
              loading="lazy"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Booking/Inquiry Form Section - White Background -->
    <section
      id="booking"
      class="bg-white py-16 md:py-24 transition-opacity duration-500 ease-in"
    >
      <UContainer>
        <!-- Updated inner div background -->
        <div class="bg-neutral-50 shadow-lg mx-auto p-8 rounded-lg max-w-2xl">
          <h2
            class="mb-8 font-bold text-primary-800 text-3xl md:text-4xl text-center"
          >
            Book an Appointment or Send an Inquiry
          </h2>
          <InquiryForm />
        </div>
      </UContainer>
    </section>
  </div>
</template>
