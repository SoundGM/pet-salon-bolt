<script setup lang="ts">
  // Data for the NEW Services Section (based on the old Why Choose Us)
  const services = [
    {
      title: 'Osnovno kopanje in sušenje',
      description:
        'Temeljito kopanje z uporabo visokokakovostnih šamponov, prilagojenih vrsti dlake, in nežno sušenje.',
      icon: 'i-mingcute-shower-line',
    },
    {
      title: 'Striženje in oblikovanje dlake',
      description:
        'Profesionalno striženje in oblikovanje dlake glede na pasmo in vaše želje.',
      icon: 'i-mingcute-scissors-line',
    },
    {
      title: 'Nega nohtov',
      description:
        'Varno in natančno krajšanje nohtov za preprečevanje nelagodja in morebitnih poškodb.',
      icon: 'i-mingcute-paw-line',
    },
    {
      title: 'Čiščenje ušes',
      description:
        'Nežno čiščenje ušesnih kanalov za preprečevanje okužb in ohranjanje zdravja ušes.',
      icon: 'i-mingcute-ear-line',
    },
    {
      title: 'Razvozlavanje dlake',
      description:
        'Potrpežljivo razvozlavanje in odstranjevanje vozlov za ohranjanje gladke in sijoče dlake.',
      icon: 'i-mingcute-chines-knot-line',
    },
    {
      title: 'Posebni tretmaji (po dogovoru)',
      description:
        'Po individualnem dogovoru nudimo tudi posebne tretmaje, kot so nega zob, odstranjevanje poddlake in druge storitve.',
      icon: 'i-mingcute-sparkles-2-line',
    },
  ]

  // Data for the NEW Why Choose Us Section (based on the old About Us)
  const whyUsPoints = [
    {
      title: 'Izkušeno in skrbno osebje',
      description:
        'Naša ekipa se ponaša s certificiranimi frizerji z večletnimi izkušnjami pri delu z ljubljenčki vseh pasem in temperamentov, z nežnim in ljubečim pristopom.',
      imageUrl: '/staff.jpg', // Placeholder - morda posodobite s slikami salona
      imageSide: 'left', // 'left' or 'right'
      borderColor: 'border-primary-500',
      icon: 'i-mingcute-group-3-line',
    },
    {
      title: 'Okolje brez stresa',
      description:
        'Naš salon smo zasnovali kot miren, čist in varen pristan. Uporabljamo tehnike pozitivne spodbude, da se vaš ljubljenček med obiskom počuti udobno in predvsem varno.',
      imageUrl: '/staff2.jpg', // Placeholder - morda posodobite s slikami salona
      imageSide: 'right', // 'left' or 'right'
      borderColor: 'border-secondary-500',
      icon: 'i-mingcute-leaf-line',
    },
  ]

  // Data for Customer Testimonials (Placeholder) - Prevedeno, imena in komentarje morda prilagodite
  const testimonials = [
    {
      name: 'Sara K.',
      rating: 5,
      comment:
        'Absolutno čudovita storitev! Moj pudelj še nikoli ni izgledal bolje. Osebje je bilo tako nežno in skrbno.',
      rotation: 'rotate-1',
      color: 'border-primary-500',
    },
    {
      name: 'Miha R.',
      rating: 5,
      comment: 'Odlična izkušnja. Malo dražje, ampak zelo, zelo vredno.',
      rotation: '-rotate-2',
      color: 'border-secondary-500',
    },
    {
      name: 'Monika L.',
      rating: 4,
      comment:
        'Z mojo tesnobno mačko Luno so ravnali s tako potrpežljivostjo. Resnično priporočam za nervozne ljubljenčke.',
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
              Pasji Frizeraj
            </h1>
            <p
              class="mb-8 max-w-md text-neutral-800 text-xl md:text-2xl md:text-left text-center"
            >
              Izkušnje in ljubezen v vsaki negi
            </p>
            <UButton
              to="#contact"
              label="Kontaktirajte nas"
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
          alt="Vesel pes po negi"
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
              alt="Pomeranec"
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
              Oaza miru in nege za vašega kosmatinca
            </h2>
            <h3 class="mb-2 font-semibold text-neutral-800 text-lg">
              Naša zgodba
            </h3>
            <p class="mb-4 text-neutral-700 text-lg">
              Naša pot se je začela iz čiste ljubezni do živali in želje, da jim
              ponudimo najboljšo možno nego. Opazili smo, da je obisk salona za
              nekatere ljubljenčke lahko stresen, zato smo ustvarili prostor,
              kjer se počutijo sproščeno in varno. Vsak kosmatinec je pri nas
              obravnavan kot družinski član, z veliko mero potrpežljivosti in
              nežnosti.
            </p>
            <h3 class="mt-6 mb-2 font-semibold text-neutral-800 text-lg">
              Naša zaveza
            </h3>
            <p class="mb-6 text-neutral-700 text-lg">
              Naše poslanstvo je preprosto: zagotoviti vrhunsko nego, ki
              prispeva k zdravju, dobremu počutju in sreči vašega ljubljenčka.
              Verjamemo, da je nega več kot le striženje – je priložnost, da
              vašemu kosmatincu namenimo posebno pozornost in ga razvajamo.
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
            Naše storitve nege
          </h2>
          <p class="text-neutral-700 text-lg">
            Ne glede na to, ali vaš pes potrebuje osvežilno kopel, vaša mačka
            elegantno pričesko ali vaš mali glodalec nežno nego nohtov, boste v
            našem salonu našli vse, kar vaš ljubljenček potrebuje.
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
            Mnenja strank
          </h2>
          <p class="text-neutral-800 text-xl">
            Poglejte, kaj naše stranke pravijo o svojih izkušnjah v Pasjem
            Frizeraju.
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
            Zakaj izbrati nas?
          </h2>
          <p class="text-neutral-700 text-lg">
            V našem salonu razumemo, da je vaš ljubljenček del vaše družine.
            Zato nudimo le najboljšo nego v prijaznem in sproščenem okolju.
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
              Stopite v stik
            </h3>
            <p class="mb-6 text-neutral-700 text-lg md:text-left text-center">
              Ste pripravljeni privoščiti svojemu ljubljenčku vrhunsko nego?
              Izpolnite spodnji obrazec ali nas pokličite. Z veseljem vam bomo
              svetovali!
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
              Stopite v stik
            </h2>
            <p class="mb-6 text-neutral-700 text-lg">
              Imate vprašanja ali ste pripravljeni na rezervacijo? Kontaktirajte nas še danes! Z veseljem vam bomo pomagali.
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
                src="https://www.openstreetmap.org/export/embed.html?bbox=15.2227%2C46.1413%2C15.2427%2C46.1613&layer=mapnik&marker=46.1513%2C15.2327"
              ></iframe>
            </div>
            <div class="space-y-4 order-1 lg:order-2 text-md text-neutral-800">
              <p class="flex items-center">
                <UIcon
                  name="i-heroicons-map-pin"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                Na Pristavi 32, 3270 Laško, Slovenija
              </p>
              <!-- Phone number removed as per user request/lack of Slovenian number -->
              <!-- <p class="flex items-center">
                <UIcon
                  name="i-heroicons-phone"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                [Slovenska telefonska številka]
              </p> -->
              <p class="flex items-center">
                <UIcon
                  name="i-heroicons-envelope"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                salon.pasjifrizeraj@gmail.com
              </p>
              <p class="flex items-center">
                <UIcon
                  name="i-heroicons-clock"
                  class="flex-shrink-0 mr-3 w-5 h-5 text-primary-600"
                />
                Pon - Pet: 9:00 - 18:00, Sob: 10:00 - 14:00 (prilagodite delovni
                čas)
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Removed separate Contact Form Section -->
  </div>
</template>
