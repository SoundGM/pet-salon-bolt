<script setup lang="ts">
  // Data for the NEW Services Section (based on the old Why Choose Us)
  const services = [
    {
      title: 'Popolna Nega',
      description:
        'Celovito razvajanje, vključno s kopeljo, striženjem, krajšanjem krempljev in čiščenjem ušes.',
      icon: 'i-heroicons-sparkles', // Example icon
    },
    {
      title: 'Kopel in Krtačenje',
      description:
        'Osvežilna kopel in temeljito krtačenje za ohranjanje zdrave dlake.',
      icon: 'i-heroicons-swatch', // Example icon
    },
    {
      title: 'Krajšanje Krempljev',
      description: 'Varno in nežno krajšanje krempljev za udobje in zdravje.',
      icon: 'i-heroicons-scissors', // Example icon
    },
    {
      title: 'Uvajanje Mladičkov',
      description: 'Nežno uvajanje v nego za mlade kužke.',
      icon: 'i-heroicons-heart', // Example icon
    },
    {
      title: 'Tretma Proti Izpadanju Dlake',
      description: 'Zmanjšajte izpadanje dlake in ohranite svoj dom čistejši.',
      icon: 'i-heroicons-adjustments-horizontal', // Example icon
    },
    {
      title: 'Ščetkanje Zob',
      description: 'Spodbujajte zobno higieno za bolj zdrav nasmeh.',
      icon: 'i-heroicons-shield-check', // Example icon
    },
  ]

  // Data for the NEW Why Choose Us Section (based on the old About Us)
  const whyUsPoints = [
    {
      title: 'Izkušeno in Skrbno Osebje',
      description:
        'Naša ekipa se ponaša s certificiranimi negovalci z dolgoletnimi izkušnjami pri ravnanju z ljubljenčki vseh pasem in temperamentov z nežnim, ljubečim dotikom.',
      imageUrl: '/staff.jpg', // Updated placeholder
      imageSide: 'left', // 'left' or 'right'
      borderColor: 'border-primary-500',
    },
    {
      title: 'Okolje Brez Stresa',
      description:
        'Naš salon smo zasnovali kot mirno, čisto in varno zatočišče. Uporabljamo tehnike pozitivne spodbude, da se vaš ljubljenček med obiskom počuti udobno in varno.',
      imageUrl: '/salon2.jpg', // Updated placeholder (different seed)
      imageSide: 'right', // 'left' or 'right'
      borderColor: 'border-secondary-500',
    },
  ]

  // Data for Customer Testimonials (Placeholder)
  const testimonials = [
    {
      name: 'Sara K.',
      rating: 5,
      comment:
        'Absolutno čudovita storitev! Moj pudelj Fifi še nikoli ni izgledal bolje. Osebje je bilo tako nežno in skrbno.',
      rotation: 'rotate-1',
      color: 'border-primary-500',
    },
    {
      name: 'Miha R.',
      rating: 4,
      comment:
        'Odlična izkušnja na splošno. Moj zlati prinašalec Max se je vrnil srečen in čist. Malo drago, a vredno.',
      rotation: '-rotate-2',
      color: 'border-secondary-500',
    },
    {
      name: 'Jessica L.',
      rating: 5,
      comment:
        'Z mojo tesnobno mačko Luno so ravnali s tako potrpežljivostjo. Zelo priporočam za nervozne ljubljenčke!',
      rotation: 'rotate-2',
      color: 'border-primary-500',
    },
    {
      name: 'David P.',
      rating: 5,
      comment:
        'Hitra, učinkovita in prijazna storitev. Buster se vedno veseli svojega dneva za nego!',
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
        :initial="{ opacity: 0, y: 30, scale: 0.9, rotate: 0 }"
        :enter="{
          opacity: 0.9,
          y: 0,
          scale: 1,
          rotate: 40,
          transition: { delay: 500, duration: 500, ease: 'easeOut' },
        }"
        class="hidden md:block top-[60%] left-[45%] z-0 absolute bg-primary-500 opacity-90 rounded-3xl size-[80px] transform"
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
          <div class="z-10 relative">
            <h1
              class="mb-4 font-bold text-primary-800 text-5xl md:text-7xl leading-tight"
            >
              Pasje Kraljestvo
            </h1>
            <p class="mb-8 max-w-md text-neutral-800 text-xl md:text-2xl">
              Strokovne storitve nege z nežnim dotikom.
            </p>
            <UButton
              to="#contact"
              label="Kontaktirajte Nas"
              size="xl"
              color="primary"
              variant="solid"
              class="px-8 py-3 font-semibold hover:scale-105 transition-transform duration-300 transform"
            />
          </div>
        </div>

        <!-- Right Column: Image - Absolute positioned -->
      </UContainer>
      <div
        class="right-0 -bottom-10 absolute w-[60vw] h-[120%] overflow-hidden"
        v-motion
        :initial="{ opacity: 0, x: 50 }"
        :enter="{
          opacity: 1,
          x: 0,
          transition: { delay: 200, duration: 600, ease: 'easeOut' },
        }"
      >
        <NuxtImg
          src="/dogo2.png"
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
              src="/bananadog.jpg"
              alt="Pomergrom"
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
              Kjer Repki Mahajo &amp; Mucke Predejo
            </h2>
            <h3 class="mb-2 font-semibold text-neutral-800 text-lg">
              Naša Zgodba
            </h3>
            <p class="mb-4 text-neutral-700 text-lg">
              Dobrodošli v PetSalon, kjer se strast do ljubljenčkov sreča s
              profesionalno nego. Ustanovljeni leta 2015, je naše poslanstvo
              vedno bilo zagotoviti varno, udobno in veselo izkušnjo nege za
              vsakega ljubljenčka, ki prestopi naša vrata.
            </p>
            <h3 class="mt-6 mb-2 font-semibold text-neutral-800 text-lg">
              Naša Zaveza
            </h3>
            <p class="mb-6 text-neutral-700 text-lg">
              Naši certificirani negovalci niso le vešči različnih tehnik nege,
              ampak so tudi iskreni ljubitelji živali, predani dobremu počutju
              vašega ljubljenčka. Verjamemo, da je redna nega ključna za zdravje
              in srečo hišnega ljubljenčka.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Services Section - NEW DESIGN (Based on old Why Choose Us) -->
    <section
      id="services"
      class="relative bg-neutral-50 px-8 py-20 md:pt-28 md:pb-36 overflow-hidden"
    >
      <!-- Decorative Shapes - Adjusted roundness -->
      <div
        class="top-[5%] right-[10%] z-0 absolute bg-primary-500 rounded-2xl size-20 rotate-12 transform"
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
            Naše Storitve Nege
          </h2>
          <p class="text-neutral-700 text-lg">
            Nudimo vrsto storitev, prilagojenih edinstvenim potrebam vašega
            ljubljenčka. Od osnovnih kopeli do popolnih striženj, vse opravimo
            skrbno.
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
                delay: 200 + index * 100,
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
            Vesele Tačke, Srečni Starši!
          </h2>
          <p class="text-neutral-800 text-xl">
            Poglejte, kaj naše stranke pravijo o svoji izkušnji v PetSalonu.
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
                delay: 200 + index * 100,
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
            Zakaj Izbrati PetSalon?
          </h2>
          <p class="text-neutral-700 text-lg">
            Potrudimo se dodatno, da zagotovimo pozitivno izkušnjo tako vam kot
            vašemu ljubljenčku.
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
                :alt="`Slika za ${point.title}`"
                class="z-10 relative shadow-lg rounded-lg w-full h-auto object-cover aspect-video"
                width="450"
                height="253"
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
              <h3 class="mb-3 font-bold text-1xl text-primary-800 md:text-2xl">
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
        class="right-[20%] bottom-[5%] z-0 absolute bg-primary-500 rounded-xl size-28 -rotate-30 transform"
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
        <div class="items-start gap-16 grid grid-cols-1 md:grid-cols-2">
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
              Pošljite Povpraševanje
            </h3>
            <p class="mb-6 text-neutral-700 text-lg md:text-left text-center">
              Izpolnite spodnji obrazec, da nam pošljete sporočilo ali zastavite
              vprašanja. Odgovorili vam bomo v kratkem!
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
          >
            <h2 class="mb-4 font-bold text-primary-800 text-3xl md:text-4xl">
              Stopite v Stik
            </h2>
            <p class="mb-6 text-neutral-700 text-lg">
              Imate vprašanja ali ste pripravljeni na rezervacijo? Kontaktirajte
              nas danes! Z veseljem vam bomo pomagali.
            </p>
            <div class="space-y-4 text-md text-neutral-800">
              <p class="flex items-center">
                <UIcon
                  name="i-heroicons-map-pin"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                Ljubljenčkova ulica 123, Pasje mesto, 1000 Ljubljana
              </p>
              <p class="flex items-center">
                <UIcon
                  name="i-heroicons-phone"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                (01) 123-4567
              </p>
              <p class="flex items-center">
                <UIcon
                  name="i-heroicons-envelope"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                info@petsalon.primer
              </p>
              <p class="flex items-center">
                <UIcon
                  name="i-heroicons-clock"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                Pon - Pet: 9:00 - 18:00, Sob: 10:00 - 16:00
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Removed separate Contact Form Section -->
  </div>
</template>
