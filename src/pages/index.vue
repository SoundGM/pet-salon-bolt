<script setup lang="ts">
  // Data for the NEW Services Section (based on the old Why Choose Us)
  const services = [
    {
      title: 'Basic Bathing and Drying',
      description:
        'Thorough bathing using high-quality shampoos tailored to coat type, and gentle drying.',
      icon: 'i-mingcute-shower-line',
    },
    {
      title: 'Clipping and Coat Styling',
      description:
        'Professional clipping and coat styling according to breed and your preferences.',
      icon: 'i-mingcute-scissors-line',
    },
    {
      title: 'Nail Care',
      description:
        'Safe and precise nail trimming to prevent discomfort and potential injuries.',
      icon: 'i-mingcute-paw-line',
    },
    {
      title: 'Ear Cleaning',
      description:
        'Gentle cleaning of ear canals to prevent infections and maintain ear health.',
      icon: 'i-mingcute-ear-line',
    },
    {
      title: 'De-matting',
      description:
        'Patient de-matting and removal of knots to keep the coat smooth and shiny.',
      icon: 'i-mingcute-chines-knot-line',
    },
    {
      title: 'Special Treatments (by appointment)',
      description:
        'We also offer special treatments such as dental care, undercoat removal, and other services by individual appointment.',
      icon: 'i-mingcute-sparkles-2-line',
    },
  ]

  // Data for the NEW Why Choose Us Section (based on the old About Us)
  const whyUsPoints = [
    {
      title: 'Experienced and Caring Staff',
      description:
        'Our team boasts certified groomers with years of experience handling pets of all breeds and temperaments with a gentle, loving touch.',
      imageUrl: '/staff.jpg', // Updated placeholder
      imageSide: 'left', // 'left' or 'right'
      borderColor: 'border-primary-500',
      icon: 'i-mingcute-group-3-line',
    },
    {
      title: 'Stress-Free Environment',
      description:
        'We designed our salon to be a calm, clean, and safe haven. We use positive reinforcement techniques to ensure your pet feels comfortable and, above all, safe during their visit.',
      imageUrl: '/staff2.jpg', // Updated placeholder (different seed)
      imageSide: 'right', // 'left' or 'right'
      borderColor: 'border-secondary-500',
      icon: 'i-mingcute-leaf-line',
    },
  ]

  // Data for Customer Testimonials (Placeholder)
  const testimonials = [
    {
      name: 'Sarah K.',
      rating: 5,
      comment:
        'Absolutely wonderful service! My poodle has never looked better. The staff was so gentle and caring.',
      rotation: 'rotate-1',
      color: 'border-primary-500',
    },
    {
      name: 'Michael R.',
      rating: 5,
      comment:
        'Great experience overall. A bit pricey, but very, very worth it.',
      rotation: '-rotate-2',
      color: 'border-secondary-500',
    },
    {
      name: 'Monica L.',
      rating: 4,
      comment:
        'They handled my anxious cat Luna with such patience. Truly, highly recommend for nervous pets.',
      rotation: 'rotate-2',
      color: 'border-primary-500',
    },
    {
      name: 'David P.',
      rating: 5,
      comment:
        'Quick, efficient, and friendly service. Buster always looks forward to his grooming day!',
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
      class="relative flex items-center bg-secondary-400 px-4 py-20 pt-24 md:pt-32 min-h-[calc(100vh-500px)] overflow-hidden"
    >
      <!-- Decorative Shapes - Animated -->

      <div
        v-motion
        :initial="{ opacity: 0, x: 20, scale: 0.7, rotate: 90 }"
        :enter="{
          opacity: 0.9,
          x: 0,
          scale: 1,
          rotate: 45,
          transition: { delay: 400, duration: 500, ease: 'easeOut' },
        }"
        class="top-[12%] left-[44%] z-0 absolute bg-secondary-500 opacity-90 rounded-2xl size-16 transform"
      ></div>
      <div
        v-motion
        :initial="{ opacity: 0, y: -20, scale: 0.8, rotate: -45 }"
        :enter="{
          opacity: 0.9,
          y: 0,
          scale: 1,
          rotate: 12,
          transition: { delay: 300, duration: 500, ease: 'easeOut' },
        }"
        class="top-[7%] left-[40%] z-0 absolute bg-primary-500 opacity-90 rounded-xl size-12 transform"
      ></div>
      <div
        v-motion
        :initial="{ opacity: 0, y: 30, scale: 0.9, rotate: 0 }"
        :enter="{
          opacity: 0.9,
          y: 0,
          scale: 1,
          rotate: 40,
          transition: { delay: 500, duration: 500, ease: 'easeOut' },
        }"
        class="hidden lg:block top-[60%] left-[45%] z-0 absolute bg-primary-500 opacity-90 rounded-3xl size-[80px] transform"
      ></div>
      <!-- Only on mobile -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30, scale: 0.9, rotate: 0 }"
        :enter="{
          opacity: 0.9,
          y: 0,
          scale: 1,
          rotate: 40,
          transition: { delay: 500, duration: 500, ease: 'easeOut' },
        }"
        class="md:hidden block top-[80%] left-[20%] z-0 absolute bg-primary-500 opacity-90 rounded-2xl size-[60px] transform"
      ></div>
      <div
        v-motion
        :initial="{ opacity: 0, x: -25, scale: 0.85, rotate: -30 }"
        :enter="{
          opacity: 0.9,
          x: 0,
          scale: 1,
          rotate: 20,
          transition: { delay: 600, duration: 500, ease: 'easeOut' },
        }"
        class="hidden md:block top-[30%] right-[15%] z-0 absolute bg-secondary-500 opacity-90 rounded-3xl size-[120px] transform"
      ></div>
      <div
        v-motion
        :initial="{ opacity: 0, y: 40, scale: 0.75, rotate: 120 }"
        :enter="{
          opacity: 0.9,
          y: 0,
          scale: 1,
          rotate: 60,
          transition: { delay: 700, duration: 500, ease: 'easeOut' },
        }"
        class="hidden md:block bottom-[20%] left-[20%] z-0 absolute bg-secondary-500 opacity-90 rounded-2xl size-[80px] transform"
      ></div>
      <div
        v-motion
        :initial="{ opacity: 0, x: 15, scale: 0.95, rotate: 0 }"
        :enter="{
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 20,
          transition: { delay: 800, duration: 500, ease: 'easeOut' },
        }"
        class="right-[5%] bottom-[11%] z-0 absolute bg-secondary-500 rounded-xl size-[50px] transform"
      ></div>
      <div
        v-motion
        :initial="{ opacity: 0, y: -10, scale: 0.8, rotate: -90 }"
        :enter="{
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: -40,
          transition: { delay: 900, duration: 500, ease: 'easeOut' },
        }"
        class="right-[5%] bottom-[10%] z-0 absolute bg-primary-500 rounded-xl size-[40px] transform"
      ></div>
      <div
        v-motion
        :initial="{ opacity: 0, x: -30, scale: 0.7, rotate: 0 }"
        :enter="{
          opacity: 0.9,
          x: 0,
          scale: 1,
          rotate: -60,
          transition: { delay: 1000, duration: 500, ease: 'easeOut' },
        }"
        class="hidden md:block top-[18%] left-[11%] z-0 absolute bg-secondary-500 opacity-90 rounded-2xl size-16 transform"
      ></div>
      <div
        v-motion
        :initial="{ opacity: 0, y: 50, scale: 0.6, rotate: 60 }"
        :enter="{
          opacity: 0.9,
          y: 0,
          scale: 1,
          rotate: 12,
          transition: { delay: 1100, duration: 500, ease: 'easeOut' },
        }"
        class="hidden md:block right-[-40%] bottom-[-40%] z-0 absolute bg-primary-500 opacity-90 rounded-3xl size-44 transform"
      ></div>

      <UContainer class="z-10 relative gap-8 grid grid-cols-1 md:grid-cols-2">
        <!-- Left Column: Text & Button -->
        <div
          class="relative flex flex-col justify-center text-left"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { delay: 100, duration: 500, ease: 'easeOut' },
          }"
        >
          <!-- Content -->
          <div class="z-10 relative flex flex-col items-center md:items-start">
            <h1
              class="mb-4 font-bold text-primary-800 text-5xl md:text-7xl leading-tight"
            >
              Your Pet Groomer
            </h1>
            <p
              class="mb-8 max-w-md text-neutral-800 text-xl md:text-2xl md:text-left text-center"
            >
              Experience and love in every groom
            </p>
            <UButton
              to="#contact"
              label="Contact Us"
              size="xl"
              color="primary"
              trailing-icon="i-mingcute-arrow-right-circle-line"
              variant="solid"
              class="px-8 py-3 font-semibold hover:scale-105 transition-transform duration-300 transform"
            />
          </div>
        </div>

        <!-- Right Column: Image - Absolute positioned -->
      </UContainer>
      <div
        class="hidden md:block right-0 -bottom-10 absolute w-[60vw] h-[120%] overflow-hidden"
      >
        <NuxtImg
          src="/hero-dog.png"
          alt="Happy dog after grooming"
          class="right-0 bottom-0 absolute brightness-110 w-full h-full object-bottom object-contain mix-blend-multiply filter contrast-90"
          width="800"
          height="800"
          preload
        />
      </div>
    </section>

    <!-- About Us Section - White Background -->
    <section
      id="about"
      class="relative bg-white py-20 md:pt-28 md:pb-36 overflow-hidden"
    >
      <!-- Decorative Shapes - Adjusted roundness -->
      <div
        class="top-[15%] left-[10%] z-0 absolute bg-primary-500 rounded-3xl size-24 -rotate-12 transform"
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :visibleOnce="{
          opacity: 1,
          scale: 1,
          transition: { delay: 300, duration: 400 },
        }"
      ></div>
      <div
        class="right-[5%] bottom-[10%] z-0 absolute bg-secondary-500 rounded-2xl size-32 rotate-45 transform"
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :visibleOnce="{
          opacity: 1,
          scale: 1,
          transition: { delay: 400, duration: 400 },
        }"
      ></div>

      <UContainer class="z-10 relative">
        <div class="items-center gap-16 grid md:grid-cols-2">
          <!-- Image with Offset Border - Increased offset -->
          <div
            class="relative"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: { delay: 100, duration: 500, ease: 'easeOut' },
            }"
          >
            <NuxtImg
              src="/about-dog.jpg"
              alt="Pomeranian dog"
              class="z-10 relative shadow-lg rounded-lg w-full h-full object-cover aspect-square"
              width="600"
              height="600"
              loading="lazy"
            />
            <div
              class="absolute inset-0 border-4 border-primary-500 rounded-lg translate-x-2 translate-y-2 transform"
              aria-hidden="true"
            ></div>
          </div>
          <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: { delay: 200, duration: 500, ease: 'easeOut' },
            }"
          >
            <h2 class="mb-8 font-bold text-primary-800 text-3xl md:text-4xl">
              An Oasis of Peace and Care for Your Furry Friend
            </h2>
            <h3 class="mb-2 font-semibold text-neutral-800 text-lg">
              Our Story
            </h3>
            <p class="mb-4 text-neutral-700 text-lg">
              Our journey began out of pure love for animals and a desire to
              offer them the best possible care. We noticed that a visit to the
              salon can be stressful for some pets, so we created a space where
              they feel relaxed and safe. Every furry friend is treated like a
              family member with a great deal of patience and gentleness here.
            </p>
            <h3 class="mt-6 mb-2 font-semibold text-neutral-800 text-lg">
              Our Commitment
            </h3>
            <p class="mb-6 text-neutral-700 text-lg">
              Our mission is simple: to provide top-quality care that
              contributes to the health, well-being, and happiness of your pet.
              We believe that grooming is more than just a haircut – it's an
              opportunity to give your furry friend special attention and pamper
              them.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Services Section - NEW DESIGN (Based on old Why Choose Us) -->
    <section
      id="services"
      class="relative bg-neutral-50 px-4 py-20 md:pt-28 md:pb-36 overflow-hidden"
    >
      <!-- Decorative Shapes - Adjusted roundness -->
      <div
        class="hidden md:block top-[5%] right-[10%] z-0 absolute bg-primary-500 rounded-2xl size-20 rotate-12 transform"
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :visibleOnce="{
          opacity: 1,
          scale: 1,
          transition: { delay: 300, duration: 400 },
        }"
      ></div>
      <div
        class="bottom-[15%] left-[5%] z-0 absolute bg-secondary-500 rounded-3xl size-28 -rotate-45 transform"
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :visibleOnce="{
          opacity: 1,
          scale: 1,
          transition: { delay: 400, duration: 400 },
        }"
      ></div>

      <UContainer class="z-10 relative px-0">
        <div
          class="mx-auto mb-20 max-w-2xl text-center"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { delay: 100, duration: 500, ease: 'easeOut' },
          }"
        >
          <h2 class="mb-4 font-bold text-primary-800 text-3xl md:text-4xl">
            Our Grooming Services
          </h2>
          <p class="text-neutral-700 text-lg">
            Whether your dog needs a refreshing bath, your cat an elegant
            hairstyle, or your small rodent gentle nail care, you'll find
            everything your pet needs at our salon.
          </p>
        </div>
        <div
          class="gap-8 md:gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div
            v-for="(service, index) in services"
            :key="service.title"
            class="group bg-white shadow-md hover:shadow-2xl p-6 rounded-lg text-left transition-all hover:-translate-y-1 duration-300 transform"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                delay: index * 100 + index * 3.14,
                duration: 400,
                ease: 'easeOut',
              },
            }"
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
      class="relative bg-secondary-400 py-20 md:pt-28 md:pb-36 overflow-hidden"
    >
      <UContainer class="z-10 relative">
        <div
          class="mx-auto mb-20 max-w-2xl text-center"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { delay: 100, duration: 500, ease: 'easeOut' },
          }"
        >
          <h2 class="mb-4 font-bold text-primary-800 text-3xl md:text-4xl">
            Reviews
          </h2>
          <p class="text-neutral-800 text-xl">
            See what our clients say about their experience at Your Pet Groomer.
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
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                delay: index * 100,
                duration: 400,
                ease: 'easeOut',
              },
            }"
          />
        </div>
      </UContainer>
    </section>

    <!-- Why Choose Us Section -->
    <section
      id="why-us"
      class="relative bg-white py-16 md:pt-28 md:pb-36 overflow-hidden"
    >
      <!-- Decorative Shapes - Adjusted roundness -->
      <div
        class="top-[20%] right-[8%] z-0 absolute bg-primary-500 rounded-xl size-16 rotate-30 transform"
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :visibleOnce="{
          opacity: 1,
          scale: 1,
          transition: { delay: 300, duration: 400 },
        }"
      ></div>
      <div
        class="bottom-[25%] left-[12%] z-0 absolute bg-secondary-500 rounded-2xl size-12 -rotate-20 transform"
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :visibleOnce="{
          opacity: 1,
          scale: 1,
          transition: { delay: 400, duration: 400 },
        }"
      ></div>

      <UContainer class="z-10 relative">
        <div
          class="mx-auto mb-20 max-w-2xl text-center"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { delay: 100, duration: 500, ease: 'easeOut' },
          }"
        >
          <h2 class="mb-4 font-bold text-primary-800 text-3xl md:text-4xl">
            Why Choose Us?
          </h2>
          <p class="text-neutral-700 text-lg">
            At our salon, we understand that your pet is part of your family.
            That's why we provide only the best care in a friendly and relaxed
            environment.
          </p>
        </div>

        <!-- Alternating Grid -->
        <div class="space-y-16">
          <div
            v-for="(point, index) in whyUsPoints"
            :key="point.title"
            class="items-center gap-16 grid md:grid-cols-2"
            v-motion
            :initial="{ opacity: 0, x: point.imageSide === 'left' ? -50 : 50 }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: {
                delay: 200 + index * 150,
                duration: 500,
                ease: 'easeOut',
              },
            }"
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
                :alt="`Image for ${point.title}`"
                class="z-10 relative shadow-lg rounded-lg w-full h-auto object-cover aspect-video"
                width="450"
                height="253"
                loading="lazy"
              />
              <div
                :class="[
                  'absolute inset-0 border-4 rounded-lg transform translate-x-2 translate-y-2',
                  point.borderColor,
                ]"
                aria-hidden="true"
              ></div>
            </div>
            <!-- Text Content -->
            <div :class="point.imageSide === 'left' ? 'md:order-last' : ''">
              <div class="flex items-center gap-2">
                <UIcon
                  :name="point.icon"
                  class="mb-4 text-primary-500 text-4xl group-hover:rotate-6 transition-transform duration-300"
                />
                <h3
                  class="mb-3 font-bold text-1xl text-primary-800 md:text-2xl"
                >
                  <!-- Reduced font size -->
                  {{ point.title }}
                </h3>
              </div>
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
      class="relative bg-neutral-50 py-16 md:pt-28 md:pb-36 overflow-hidden"
    >
      <!-- Decorative Shapes - Adjusted roundness -->
      <div
        class="top-[10%] left-[15%] z-0 absolute bg-secondary-500 rounded-2xl size-14 rotate-60 transform"
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :visibleOnce="{
          opacity: 1,
          scale: 1,
          transition: { delay: 300, duration: 400 },
        }"
      ></div>
      <div
        class="right-[20%] bottom-[5%] z-0 absolute bg-primary-500 rounded-xl size-18 -rotate-30 transform"
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :visibleOnce="{
          opacity: 1,
          scale: 1,
          transition: { delay: 400, duration: 400 },
        }"
      ></div>

      <UContainer class="z-10 relative">
        <!-- Grid for Contact Info and Form -->
        <div class="items-start gap-16 grid grid-cols-1 lg:grid-cols-2">
          <!-- Left Column: Inquiry Form -->
          <div
            class="relative"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: { delay: 100, duration: 500, ease: 'easeOut' },
            }"
          >
            <h3
              class="mb-4 font-bold text-primary-800 text-2xl md:text-3xl md:text-left text-center"
            >
              Get in Touch
            </h3>
            <p class="mb-6 text-neutral-700 text-lg md:text-left text-center">
              Ready to treat your pet to top-notch grooming? Fill out the form
              below or give us a call. We're happy to advise you!
            </p>
            <InquiryForm />
          </div>

          <!-- Right Column: Contact Info -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: { delay: 200, duration: 500, ease: 'easeOut' },
            }"
            class="flex flex-col"
          >
            <!-- <h2 class="mb-4 font-bold text-primary-800 text-2xl md:text-3xl">
              Get in Touch
            </h2>
            <p class="mb-6 text-neutral-700 text-lg">
              Have questions or ready to book? Contact us today! We're happy to help.
            </p> -->
            <div
              class="order-2 lg:order-1 mt-8 mb-4 rounded-lg h-full overflow-hidden"
            >
              <iframe
                width="100%"
                height="700"
                loading="lazy"
                class="w-full h-[530px]"
                style="border: 0"
                allowfullscreen
                aria-hidden="false"
                tabindex="0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.0300%2C51.5000%2C-0.0100%2C51.5100&layer=mapnik&marker=51.5050%2C-0.0200"
              ></iframe>
            </div>
            <div class="space-y-4 order-1 lg:order-2 text-md text-neutral-800">
              <p class="flex items-center">
                <UIcon
                  name="i-heroicons-map-pin"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                1 Canary Wharf, London E14 5AB, UK
              </p>
              <p class="flex items-center">
                <UIcon
                  name="i-heroicons-phone"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                020 7946 0123
              </p>
              <p class="flex items-center">
                <UIcon
                  name="i-heroicons-envelope"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                info@yourpetgroomer.com
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
        </div>
      </UContainer>
    </section>

    <!-- Removed separate Contact Form Section -->
  </div>
</template>
