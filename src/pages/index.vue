<script setup lang="ts">
  import ServiceCard from '~/components/ServiceCard.vue'
  import InquiryForm from '~/components/InquiryForm.vue'

  // Example data - replace with actual content
  const services = [
    {
      title: 'Full Grooming',
      description:
        'Complete pampering including bath, haircut, nail trim, and ear cleaning.',
      imageUrl: 'https://picsum.photos/seed/grooming/400/300', // Adjusted aspect ratio
    },
    {
      title: 'Bath & Brush',
      description:
        'A refreshing bath and thorough brushing to keep the coat healthy.',
      imageUrl: 'https://picsum.photos/seed/bathbrush/400/300', // Adjusted aspect ratio
    },
    {
      title: 'Nail Trimming',
      description: 'Safe and gentle nail clipping for comfort and health.',
      imageUrl: 'https://picsum.photos/seed/nailtrim/400/300', // Adjusted aspect ratio
    },
    {
      title: 'Puppy Intro',
      description: 'Gentle introduction to grooming for young pups.',
      imageUrl: 'https://picsum.photos/seed/puppyintro/400/300', // Adjusted aspect ratio
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
      <!-- Decorative Shapes -->
      <div
        class="top-[7%] left-[40%] z-0 absolute bg-primary-500 opacity-90 rounded-2xl size-12 rotate-12 transform"
      ></div>
      <div
        class="top-[12%] left-[44%] z-0 absolute bg-secondary-500 opacity-90 rounded-2xl size-16 rotate-45 transform"
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
      <div
        class="top-[38%] left-[22%] z-0 absolute bg-secondary-500 opacity-90 rounded-2xl size-24 -rotate-60 transform"
      ></div>
      <div
        class="right-[-40%] bottom-[-40%] z-0 absolute bg-primary-500 opacity-90 rounded-2xl size-44 rotate-12 transform"
      ></div>

      <UContainer class="z-10 relative items-center gap-12 grid md:grid-cols-2">
        <!-- Left Column: Text & Button -->
        <div class="relative text-left">
          <!-- Content -->
          <div class="z-10 relative">
            <h1
              class="mb-4 font-bold text-primary-800 text-5xl md:text-7xl leading-tight"
            >
              Pamper Your Pet<br />Like Royalty
            </h1>
            <p class="mb-8 max-w-md text-neutral-800 text-xl md:text-2xl">
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

        <!-- Right Column: Image - No 3D effect -->
        <div class="relative flex justify-center items-center">
          <!-- Decorative background shape -->
          <div
            class="absolute inset-0 bg-white opacity-50 blur-xl rounded-full scale-110 transform"
          ></div>
          <NuxtImg
            src="/images/hero-dog.png"
            alt="Happy dog after grooming"
            class="z-10 relative w-full max-w-md object-contain aspect-square rounded-full"
            width="500"
            height="500"
            preload
          />
        </div>
      </UContainer>
    </section>

    <!-- About Us Section - White Background -->
    <section
      id="about"
      class="relative bg-white py-16 md:py-24 overflow-hidden transition-opacity duration-500 ease-in"
    >
      <!-- Decorative Shapes -->
      <div
        class="top-[15%] left-[10%] z-0 absolute bg-primary-500/10 rounded-full size-24 -rotate-12 transform"
      ></div>
      <div
        class="right-[5%] bottom-[10%] z-0 absolute bg-secondary-500/15 rounded-full size-32 rotate-45 transform"
      ></div>

      <UContainer class="z-10 relative">
        <div class="items-center gap-16 grid md:grid-cols-2">
          <!-- Image with Offset Border - Increased offset -->
          <div class="relative">
            <NuxtImg
              src="https://picsum.photos/seed/petsalon_about/600/600"
              class="relative z-10 shadow-lg rounded-lg w-full h-full object-cover aspect-square"
              width="600"
              height="600"
              loading="lazy"
            />
            <div
              class="absolute inset-0 border-4 border-primary-500 rounded-lg transform translate-x-4 translate-y-4"
              aria-hidden="true"
            ></div>
          </div>
          <div>
            <h2 class="mb-4 font-bold text-primary-800 text-4xl md:text-5xl">
              Your Pet's Happy Place
            </h2>
            <h3 class="font-semibold text-neutral-800 text-xl mb-2">
              Our Story
            </h3>
            <p class="mb-4 text-neutral-700 text-lg">
              Welcome to PetSalon, where passion for pets meets professional
              grooming. Founded in [Year], our mission has always been to
              provide a safe, comfortable, and happy grooming experience for
              every pet that walks through our doors.
            </p>
            <h3 class="font-semibold text-neutral-800 text-xl mb-2 mt-6">
              Our Commitment
            </h3>
            <p class="mb-6 text-neutral-700 text-lg">
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
              size="lg"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Services Section - Neutral Background -->
    <section
      id="services"
      class="relative bg-neutral-50 py-16 md:py-24 overflow-hidden transition-opacity duration-500 ease-in"
    >
      <!-- Decorative Shapes -->
      <div
        class="top-[5%] right-[10%] z-0 absolute bg-primary-500/10 rounded-full size-20 rotate-12 transform"
      ></div>
      <div
        class="bottom-[15%] left-[5%] z-0 absolute bg-secondary-500/15 rounded-full size-28 -rotate-45 transform"
      ></div>

      <UContainer class="z-10 relative">
        <div class="mx-auto mb-12 max-w-2xl text-center">
          <h2 class="mb-4 font-bold text-primary-800 text-4xl md:text-5xl">
            Our Grooming Services
          </h2>
          <p class="text-neutral-700 text-xl">
            We offer a range of services tailored to meet the unique needs of
            your pet. From basic baths to full haircuts, we do it all with care.
          </p>
        </div>
        <!-- Grid layout with 2 columns -->
        <div class="gap-8 grid grid-cols-1 sm:grid-cols-2">
          <ServiceCard
            v-for="(service, index) in services"
            :key="service.title"
            :title="service.title"
            :description="service.description"
            :image-url="service.imageUrl"
          />
        </div>
      </UContainer>
    </section>

    <!-- Why Choose Us Section - White Background -->
    <section
      id="why-us"
      class="relative bg-white py-16 md:py-24 overflow-hidden transition-opacity duration-500 ease-in"
    >
      <!-- Decorative Shapes -->
      <div
        class="top-[20%] right-[8%] z-0 absolute bg-secondary-500/10 rounded-2xl size-16 rotate-30 transform"
      ></div>
      <div
        class="bottom-[25%] left-[12%] z-0 absolute bg-primary-500/15 rounded-3xl size-24 -rotate-20 transform"
      ></div>

      <UContainer class="z-10 relative">
        <div class="mx-auto mb-12 max-w-2xl text-center">
          <h2 class="mb-4 font-bold text-primary-800 text-4xl md:text-5xl">
            Why Choose PetSalon?
          </h2>
          <p class="text-neutral-700 text-xl">
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
            <p class="text-neutral-700 text-base">
              {{ point.description }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Contact Section - Neutral Background -->
    <section
      id="contact"
      class="relative bg-neutral-50 py-16 md:py-24 overflow-hidden transition-opacity duration-500 ease-in"
    >
      <!-- Decorative Shapes -->
      <div
        class="top-[10%] left-[15%] z-0 absolute bg-primary-500/5 rounded-full size-28 rotate-60 transform"
      ></div>
      <div
        class="right-[20%] bottom-[5%] z-0 absolute bg-secondary-500/10 rounded-lg size-16 -rotate-30 transform"
      ></div>

      <UContainer class="z-10 relative">
        <div class="items-center gap-16 grid md:grid-cols-2">
          <div>
            <h2 class="mb-4 font-bold text-primary-800 text-4xl md:text-5xl">
              Get In Touch
            </h2>
            <p class="mb-6 text-neutral-700 text-xl">
              Have questions or ready to book? Contact us today! We're happy to
              help.
            </p>
            <div class="space-y-4 text-lg text-neutral-800">
              <p class="flex items-center">
                <UIcon
                  name="i-heroicons-map-pin"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                123 Pet Lane, Dogtown, CT 06040
              </p>
              <p class="flex items-center">
                <UIcon
                  name="i-heroicons-phone"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                (555) 123-4567
              </p>
              <p class="flex items-center">
                <UIcon
                  name="i-heroicons-envelope"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                info@petsalon.example
              </p>
              <p class="flex items-center">
                <UIcon
                  name="i-heroicons-clock"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                Mon - Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
          <!-- Image with Offset Border - Increased offset, removed 3D effect -->
          <div class="relative">
            <NuxtImg
              src="https://picsum.photos/seed/petsalon_map/800/450"
              alt="Map showing PetSalon location"
              class="relative z-10 shadow-lg rounded-lg w-full h-full object-cover aspect-video"
              width="800"
              height="450"
              loading="lazy"
            />
            <div
              class="absolute inset-0 border-4 border-secondary-500 rounded-lg transform translate-x-4 translate-y-4"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Booking/Inquiry Form Section - White Background -->
    <section
      id="booking"
      class="relative bg-white py-16 md:py-24 overflow-hidden transition-opacity duration-500 ease-in"
    >
      <!-- Decorative Shapes -->
      <div
        class="top-[5%] left-[5%] z-0 absolute bg-secondary-500/10 rounded-xl size-12 rotate-10 transform"
      ></div>
      <div
        class="right-[10%] bottom-[10%] z-0 absolute bg-primary-500/5 rounded-full size-36 rotate-50 transform"
      ></div>

      <UContainer class="z-10 relative max-w-2xl">
        <h2
          class="mb-8 font-bold text-primary-800 text-4xl md:text-5xl text-center"
        >
          Book an Appointment or Send an Inquiry
        </h2>
        <InquiryForm />
      </UContainer>
    </section>
  </div>
</template>
