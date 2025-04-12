<script setup lang="ts">
  // Data for the NEW Services Section (based on old Why Choose Us)
  const services = [
    {
      title: 'Full Grooming',
      description:
        'Complete pampering including bath, haircut, nail trim, and ear cleaning.',
      icon: 'i-heroicons-sparkles', // Example icon
    },
    {
      title: 'Bath & Brush',
      description:
        'A refreshing bath and thorough brushing to keep the coat healthy.',
      icon: 'i-heroicons-swatch', // Example icon
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
    {
      title: 'De-shedding Treatment',
      description: 'Reduce shedding and keep your home cleaner.',
      icon: 'i-heroicons-adjustments-horizontal', // Example icon
    },
    {
      title: 'Teeth Brushing',
      description: 'Promote dental hygiene for a healthier smile.',
      icon: 'i-heroicons-shield-check', // Example icon
    },
  ]

  // Data for the NEW Why Choose Us Section (based on old About Us)
  const whyUsPoints = [
    {
      title: 'Experienced & Caring Staff',
      description:
        'Our team boasts certified groomers with years of experience handling pets of all breeds and temperaments with a gentle, loving touch.',
      imageUrl: 'https://picsum.photos/seed/staff_care/450/250', // Adjusted size
      imageSide: 'left', // 'left' or 'right'
      borderColor: 'border-primary-500',
    },
    {
      title: 'Stress-Free Environment',
      description:
        "We've designed our salon to be a calm, clean, and safe haven. We use positive reinforcement techniques to ensure your pet feels comfortable and secure throughout their visit.",
      imageUrl: 'https://picsum.photos/seed/calm_env/450/250', // Adjusted size
      imageSide: 'right', // 'left' or 'right'
      borderColor: 'border-secondary-500',
    },
  ]

  // Placeholder Testimonial Data
  const testimonials = [
    {
      name: 'Sarah K.',
      rating: 5,
      comment:
        'Absolutely wonderful service! My poodle, Fifi, has never looked better. The staff was so gentle and caring.',
      rotation: 'rotate-1',
      color: 'border-primary-500', // Kept for potential future use, but not applied on hover now
    },
    {
      name: 'Mike R.',
      rating: 4,
      comment:
        'Great experience overall. My golden retriever, Max, came back happy and clean. A bit pricey, but worth it.',
      rotation: '-rotate-2',
      color: 'border-secondary-500',
    },
    {
      name: 'Jessica L.',
      rating: 5,
      comment:
        'They handled my anxious cat, Luna, with such patience. Highly recommend for nervous pets!',
      rotation: 'rotate-2',
      color: 'border-primary-500',
    },
    {
      name: 'David P.',
      rating: 5,
      comment:
        'Fast, efficient, and friendly service. Buster always looks forward to his grooming day!',
      rotation: '-rotate-1',
      color: 'border-secondary-500',
    },
  ]
</script>

<template>
  <div>
    <!-- Hero Section - Redesigned -->
    <section
      id="home"
      class="relative flex items-center bg-secondary-400 px-4 py-20 pt-24 md:pt-32 min-h-[calc(100vh-100px)] overflow-hidden"
    >
      <!-- Decorative Shapes - Adjusted rounding -->
      <div
        class="top-[7%] left-[40%] z-0 absolute bg-primary-500 opacity-90 rounded-xl size-12 rotate-12 transform"
      ></div>
      <div
        class="top-[12%] left-[44%] z-0 absolute bg-secondary-500 opacity-90 rounded-2xl size-16 rotate-45 transform"
      ></div>
      <div
        class="top-[10%] left-[5%] z-0 absolute bg-primary-500 opacity-90 rounded-3xl size-[100px] rotate-40 transform"
      ></div>
      <div
        class="top-[30%] right-[15%] z-0 absolute bg-secondary-500 opacity-90 rounded-3xl size-[120px] rotate-20 transform"
      ></div>
      <div
        class="bottom-[20%] left-[20%] z-0 absolute bg-secondary-500 opacity-90 rounded-2xl size-[80px] rotate-60 transform"
      ></div>
      <div
        class="right-[5%] bottom-[11%] z-0 absolute bg-secondary-500 rounded-xl size-[50px] rotate-20 transform"
      ></div>
      <div
        class="right-[5%] bottom-[10%] z-0 absolute bg-primary-500 rounded-xl size-[40px] -rotate-40 transform"
      ></div>
      <div
        class="top-[38%] left-[22%] z-0 absolute bg-secondary-500 opacity-90 rounded-2xl size-24 -rotate-60 transform"
      ></div>
      <div
        class="right-[-40%] bottom-[-40%] z-0 absolute bg-primary-500 opacity-90 rounded-3xl size-44 rotate-12 transform"
      ></div>

      <UContainer class="z-10 relative">
        <!-- Left Column: Text & Button -->
        <div class="relative max-w-2xl text-left">
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
              to="#contact"
              label="Contact Us"
              size="xl"
              color="primary"
              variant="solid"
              class="px-8 py-3 font-semibold hover:scale-105 transition-transform duration-300 transform"
            />
          </div>
        </div>

        <!-- Right Column: Image - Absolute positioned -->
      </UContainer>
      <div class="right-0 bottom-0 absolute w-[60vw] h-[70%] overflow-hidden">
        <NuxtImg
          src="/happydogo.png"
          alt="Happy dog after grooming"
          class="right-0 bottom-0 absolute w-full h-full object-bottom object-contain"
          width="800"
          height="800"
          preload
        />
      </div>
    </section>

    <!-- About Us Section - White Background -->
    <section
      id="about"
      class="relative bg-white py-16 md:py-24 overflow-hidden transition-opacity duration-500 ease-in"
    >
      <!-- Decorative Shapes - Adjusted rounding -->
      <div
        class="top-[15%] left-[10%] z-0 absolute bg-primary-500/10 rounded-3xl size-24 -rotate-12 transform"
      ></div>
      <div
        class="right-[5%] bottom-[10%] z-0 absolute bg-secondary-500/15 rounded-2xl size-32 rotate-45 transform"
      ></div>

      <UContainer class="z-10 relative">
        <div class="items-center gap-16 grid md:grid-cols-2">
          <!-- Image with Offset Border - Increased offset -->
          <div class="relative">
            <NuxtImg
              src="https://picsum.photos/seed/petsalon_about/600/600"
              class="z-10 relative shadow-lg rounded-lg w-full h-full object-cover aspect-square"
              width="600"
              height="600"
              loading="lazy"
            />
            <div
              class="absolute inset-0 border-4 border-primary-500 rounded-lg translate-x-4 translate-y-4 transform"
              aria-hidden="true"
            ></div>
          </div>
          <div>
            <h2 class="mb-4 font-bold text-primary-800 text-4xl md:text-5xl">
              Where Tails Wag &amp; Purrs Begin
            </h2>
            <h3 class="mb-2 font-semibold text-neutral-800 text-xl">
              Our Story
            </h3>
            <p class="mb-4 text-neutral-700 text-lg">
              Welcome to PetSalon, where passion for pets meets professional
              grooming. Founded in [Year], our mission has always been to
              provide a safe, comfortable, and happy grooming experience for
              every pet that walks through our doors.
            </p>
            <h3 class="mt-6 mb-2 font-semibold text-neutral-800 text-xl">
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

    <!-- Services Section - NEW DESIGN (Based on old Why Choose Us) -->
    <section
      id="services"
      class="relative bg-neutral-50 py-16 md:py-24 overflow-hidden transition-opacity duration-500 ease-in"
    >
      <!-- Decorative Shapes - Adjusted rounding -->
      <div
        class="top-[5%] right-[10%] z-0 absolute bg-primary-500/10 rounded-2xl size-20 rotate-12 transform"
      ></div>
      <div
        class="bottom-[15%] left-[5%] z-0 absolute bg-secondary-500/15 rounded-3xl size-28 -rotate-45 transform"
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
        <div class="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(service, index) in services"
            :key="service.title"
            class="group bg-white shadow-md hover:shadow-2xl p-6 rounded-lg text-left transition-all hover:-translate-y-1 duration-300 transform"
          >
            <UIcon
              :name="service.icon"
              class="mb-4 text-primary-500 text-4xl group-hover:rotate-6 transition-transform duration-300"
            />
            <h3 class="mb-2 font-semibold text-primary-800 text-xl">
              {{ service.title }}
            </h3>
            <p class="text-neutral-700 text-base">
              {{ service.description }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Testimonials Section -->
    <section
      id="testimonials"
      class="relative bg-secondary-400 py-16 md:py-24 overflow-hidden"
    >
      <UContainer class="z-10 relative">
        <div class="mx-auto mb-12 max-w-2xl text-center">
          <h2 class="mb-4 font-bold text-primary-800 text-4xl md:text-5xl">
            Happy Paws, Happy Parents!
          </h2>
          <p class="text-neutral-800 text-xl">
            See what our clients are saying about their PetSalon experience.
          </p>
        </div>
        <div
          class="items-start gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          <TestimonialCard
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.name"
            :name="testimonial.name"
            :rating="testimonial.rating"
            :comment="testimonial.comment"
            :rotation-class="testimonial.rotation"
            :color-class="testimonial.color"
            class="transform"
            :style="{
              marginTop: `${index % 2 === 0 ? '0' : '2rem'}`,
            }"
          />
        </div>
      </UContainer>
    </section>

    <!-- Why Choose Us Section - NEW DESIGN (Based on old About Us) -->
    <section
      id="why-us"
      class="relative bg-white py-16 md:py-24 overflow-hidden transition-opacity duration-500 ease-in"
    >
      <!-- Decorative Shapes - Adjusted rounding -->
      <div
        class="top-[20%] right-[8%] z-0 absolute bg-secondary-500/10 rounded-xl size-16 rotate-30 transform"
      ></div>
      <div
        class="bottom-[25%] left-[12%] z-0 absolute bg-primary-500/15 rounded-2xl size-24 -rotate-20 transform"
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

        <!-- Alternating Grid -->
        <div class="space-y-16">
          <div
            v-for="(point, index) in whyUsPoints"
            :key="point.title"
            class="items-center gap-16 grid md:grid-cols-2"
          >
            <!-- Image with Offset Border -->
            <div
              :class="[
                'relative',
                point.imageSide === 'right' ? 'md:order-last' : '',
              ]"
            >
              <NuxtImg
                :src="point.imageUrl"
                class="z-10 relative shadow-lg rounded-lg w-full h-auto object-cover aspect-[18/10]"
                width="450"
                height="250"
                loading="lazy"
              />
              <div
                :class="[
                  'absolute inset-0 border-4 rounded-lg transform translate-x-4 translate-y-4',
                  point.borderColor,
                ]"
                aria-hidden="true"
              ></div>
            </div>
            <!-- Text Content -->
            <div :class="point.imageSide === 'left' ? 'md:order-last' : ''">
              <h3 class="mb-3 font-bold text-primary-800 text-2xl md:text-3xl">
                <!-- Reduced font size -->
                {{ point.title }}
              </h3>
              <p class="text-neutral-700 text-lg">
                {{ point.description }}
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Contact Section - Neutral Background -->
    <section
      id="contact"
      class="relative bg-neutral-50 py-16 md:py-24 overflow-hidden transition-opacity duration-500 ease-in"
    >
      <!-- Decorative Shapes - Adjusted rounding -->
      <div
        class="top-[10%] left-[15%] z-0 absolute bg-primary-500/5 rounded-2xl size-28 rotate-60 transform"
      ></div>
      <div
        class="right-[20%] bottom-[5%] z-0 absolute bg-secondary-500/10 rounded-xl size-16 -rotate-30 transform"
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
            <div class="space-y-4 text-neutral-800 text-lg">
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
          <!-- Image - Removed offset border -->
          <div class="relative">
            <NuxtImg
              src="https://picsum.photos/seed/petsalon_map/800/450"
              alt="Map showing PetSalon location"
              class="z-10 relative shadow-lg rounded-lg w-full h-full object-cover aspect-video"
              width="800"
              height="450"
              loading="lazy"
            />
            <!-- Removed the offset border div -->
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Contact Form Section - White Background -->
    <section
      id="booking"
      class="relative bg-white py-16 md:py-24 overflow-hidden transition-opacity duration-500 ease-in"
    >
      <!-- Decorative Shapes - Adjusted rounding -->
      <div
        class="top-[5%] left-[5%] z-0 absolute bg-secondary-500/10 rounded-lg size-12 rotate-10 transform"
      ></div>
      <div
        class="right-[10%] bottom-[10%] z-0 absolute bg-primary-500/5 rounded-2xl size-36 rotate-50 transform"
      ></div>

      <UContainer class="z-10 relative max-w-2xl">
        <h2
          class="mb-4 font-bold text-primary-800 text-4xl md:text-5xl text-center"
        >
          Contact Us
          <!-- Updated Title -->
        </h2>
        <p class="mb-8 text-neutral-700 text-xl text-center">
          Fill out the form below to send us a message or ask any questions.
          We'll get back to you shortly!
          <!-- Updated Description -->
        </p>
        <InquiryForm />
      </UContainer>
    </section>
  </div>
</template>
