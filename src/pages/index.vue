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
      imageUrl: 'https://picsum.photos/seed/staff/450/253', // Updated placeholder
      imageSide: 'left', // 'left' or 'right'
      borderColor: 'border-primary-500',
    },
    {
      title: 'Okolje Brez Stresa',
      description:
        'Naš salon smo zasnovali kot mirno, čisto in varno zatočišče. Uporabljamo tehnike pozitivne spodbude, da se vaš ljubljenček med obiskom počuti udobno in varno.',
      imageUrl: 'https://picsum.photos/seed/calm/450/253', // Updated placeholder (different seed)
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
      <!-- Decorative Shapes - Adjusted roundness & mobile visibility -->
      <div
        class="top-[7%] left-[40%] z-0 absolute bg-primary-500 opacity-90 rounded-xl size-12 rotate-12 transform"
      ></div>
      <div
        class="top-[12%] left-[44%] z-0 absolute bg-secondary-500 opacity-90 rounded-2xl size-16 rotate-45 transform"
      ></div>
      <div
        class="hidden md:block top-[10%] left-[5%] z-0 absolute bg-primary-500 opacity-90 rounded-3xl size-[100px] rotate-40 transform"
      ></div>
      <!-- Hidden on mobile -->
      <div
        class="hidden md:block top-[30%] right-[15%] z-0 absolute bg-secondary-500 opacity-90 rounded-3xl size-[120px] rotate-20 transform"
      ></div>
      <!-- Hidden on mobile -->
      <div
        class="hidden md:block bottom-[20%] left-[20%] z-0 absolute bg-secondary-500 opacity-90 rounded-2xl size-[80px] rotate-60 transform"
      ></div>
      <!-- Hidden on mobile -->
      <div
        class="right-[5%] bottom-[11%] z-0 absolute bg-secondary-500 rounded-xl size-[50px] rotate-20 transform"
      ></div>
      <div
        class="right-[5%] bottom-[10%] z-0 absolute bg-primary-500 rounded-xl size-[40px] -rotate-40 transform"
      ></div>
      <div
        class="hidden md:block top-[38%] left-[22%] z-0 absolute bg-secondary-500 opacity-90 rounded-2xl size-24 -rotate-60 transform"
      ></div>
      <!-- Hidden on mobile -->
      <div
        class="hidden md:block right-[-40%] bottom-[-40%] z-0 absolute bg-primary-500 opacity-90 rounded-3xl size-44 rotate-12 transform"
      ></div>
      <!-- Hidden on mobile -->

      <UContainer class="z-10 relative gap-8 grid grid-cols-1 md:grid-cols-2">
        <!-- Left Column: Text & Button -->
        <div class="relative flex flex-col justify-center text-left">
          <!-- Content -->
          <div class="z-10 relative">
            <h1
              class="mb-4 font-bold text-primary-800 text-5xl md:text-7xl leading-tight"
            >
              Razvajajte Svojega<br />Ljubljenčka Kot Kralja
            </h1>
            <p class="mb-8 max-w-md text-neutral-800 text-xl md:text-2xl">
              Strokovne storitve nege z nežnim dotikom. Vsakega ljubljenčka
              obravnavamo kot družinskega člana.
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
      class="relative bg-white py-16 md:py-24 overflow-hidden transition-opacity duration-500 ease-in"
    >
      <!-- Decorative Shapes - Adjusted roundness -->
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
              src="https://picsum.photos/seed/salon/600/600"
              alt="Notranjost salona za nego ljubljenčkov"
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
            <h2 class="mb-4 font-bold text-primary-800 text-3xl md:text-4xl">
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
      class="relative bg-neutral-50 py-16 md:py-24 overflow-hidden transition-opacity duration-500 ease-in"
    >
      <!-- Decorative Shapes - Adjusted roundness -->
      <div
        class="top-[5%] right-[10%] z-0 absolute bg-primary-500/10 rounded-2xl size-20 rotate-12 transform"
      ></div>
      <div
        class="bottom-[15%] left-[5%] z-0 absolute bg-secondary-500/15 rounded-3xl size-28 -rotate-45 transform"
      ></div>

      <UContainer class="z-10 relative">
        <div class="mx-auto mb-12 max-w-2xl text-center">
          <h2 class="mb-4 font-bold text-primary-800 text-3xl md:text-4xl">
            Naše Storitve Nege
          </h2>
          <p class="text-neutral-700 text-lg">
            Nudimo vrsto storitev, prilagojenih edinstvenim potrebam vašega
            ljubljenčka. Od osnovnih kopeli do popolnih striženj, vse opravimo
            skrbno.
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
          />
        </div>
      </UContainer>
    </section>

    <!-- Why Choose Us Section -->
    <section
      id="why-us"
      class="relative bg-white py-16 md:py-24 overflow-hidden transition-opacity duration-500 ease-in"
    >
      <!-- Decorative Shapes - Adjusted roundness -->
      <div
        class="top-[20%] right-[8%] z-0 absolute bg-secondary-500/10 rounded-xl size-16 rotate-30 transform"
      ></div>
      <div
        class="bottom-[25%] left-[12%] z-0 absolute bg-primary-500/15 rounded-2xl size-24 -rotate-20 transform"
      ></div>

      <UContainer class="z-10 relative">
        <div class="mx-auto mb-12 max-w-2xl text-center">
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
      class="relative bg-neutral-50 py-16 md:py-24 overflow-hidden transition-opacity duration-500 ease-in"
    >
      <!-- Decorative Shapes - Adjusted roundness -->
      <div
        class="top-[10%] left-[15%] z-0 absolute bg-primary-500/5 rounded-2xl size-28 rotate-60 transform"
      ></div>
      <div
        class="right-[20%] bottom-[5%] z-0 absolute bg-secondary-500/10 rounded-xl size-16 -rotate-30 transform"
      ></div>

      <UContainer class="z-10 relative">
        <!-- Grid for Contact Info and Form -->
        <div class="items-start gap-16 grid grid-cols-1 md:grid-cols-2">
          <!-- Left Column: Contact Info -->
          <div>
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

          <!-- Right Column: Inquiry Form -->
          <div class="relative">
            <h3
              class="mb-4 font-bold text-primary-800 text-2xl md:text-3xl text-center md:text-left"
            >
              Pošljite Povpraševanje
            </h3>
            <p class="mb-6 text-neutral-700 text-lg text-center md:text-left">
              Izpolnite spodnji obrazec, da nam pošljete sporočilo ali zastavite
              vprašanja. Odgovorili vam bomo v kratkem!
            </p>
            <InquiryForm />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Removed separate Contact Form Section -->
  </div>
</template>
