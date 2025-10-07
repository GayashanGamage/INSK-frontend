<template>
    <div class="min-h-screen bg-[#1A1A2E] font-sans text-[#F7F7F7] p-4 sm:p-6 lg:p-10 antialiased">
        <div class="flex flex-col gap-2 md:gap-6 max-w-7xl mx-auto space-y-12">
            <!-- menu bar section -->
            <MenubarOne></MenubarOne>

            <!-- adverticement banner -->
            <a href="https://isport.blesk.cz/" class="" target="_blank">
                <div class="w-full h-auto flex flex-col gap-2">
                    <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/INSK%20test/common/addbanner.png"
                        alt="" class="h-[100px] md:h-[200px] w-full object-cover rounded-lg" />
                    <p class="text-sm text-gray-500">Adverticement</p>
                </div>
            </a>

            <div class="w-full">
                <swiper-container ref="containerRef" :init="false">
                    <swiper-slide v-for="(slide, idx) in caroselImageList" :key="idx" class="flex flex-col relative">
                        <img :src="slide.image" alt="Slide Image"
                            class="object-cover w-full h-[calc(100vh-15rem)] rounded-2xl" />

                        <div class="absolute bottom-0 w-full h-auto bg-gradient-to-b from-slate-50/0 to-slate-900 flex flex-row items-end justify-between 
                       
                       /* --- Responsive Padding (px, py) --- */
                       py-6 px-4 sm:py-8 sm:px-8 md:py-10 md:px-12 lg:py-12 lg:px-20">

                            <div class="w-3/4 text-white">
                                <h1 class="font-black text-xl 
                               sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                                    {{ $t("header.title") }}
                                </h1>

                                <h1 class="font-light mt-2 text-sm 
                               sm:text-base sm:block 
                               md:text-xl md:mt-3 
                               lg:text-2xl 
                               hidden">
                                    {{ $t("header.description") }}
                                </h1>
                            </div>

                            <NuxtLink :to="`/${slide.link}`" class="flex-shrink-0">
                                <button class="border border-white px-3 py-1 sm:px-4 sm:py-2 rounded bg-white text-[#1A1A2E] 
                               hover:bg-[#1A1A2E] hover:text-white uppercase whitespace-nowrap 
                               text-sm sm:text-base md:text-lg">
                                    {{ $t("header.button") }}
                                </button>
                            </NuxtLink>
                        </div>
                    </swiper-slide>
                </swiper-container>
            </div>
            <div class="w-full">
                <swiper-container ref="containerRef" :init="false">
                    <swiper-slide v-for="(slide, idx) in caroselImageList" :key="idx" class="flex flex-col relative">
                        <img :src="slide.image" alt="Slide Image"
                            class="object-cover w-full h-[calc(100vh-15rem)] rounded-2xl" />

                        <div class="absolute bottom-0 w-full h-auto bg-gradient-to-b from-slate-50/0 to-slate-900 flex flex-row items-end justify-between 
                       
                       /* --- Responsive Padding (px, py) --- */
                       py-6 px-4 sm:py-8 sm:px-8 md:py-10 md:px-12 lg:py-12 lg:px-20">

                            <div class="w-3/4 text-white">
                                <h1 class="font-black text-xl 
                               sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                                    {{ $t("header.title") }}
                                </h1>

                                <h1 class="font-light mt-2 text-sm 
                               sm:text-base sm:block 
                               md:text-xl md:mt-3 
                               lg:text-2xl 
                               hidden">
                                    {{ $t("header.description") }}
                                </h1>
                            </div>

                            <NuxtLink :to="`/${slide.link}`" class="flex-shrink-0">
                                <button class="border border-white px-3 py-1 sm:px-4 sm:py-2 rounded bg-white text-[#1A1A2E] 
                               hover:bg-[#1A1A2E] hover:text-white uppercase whitespace-nowrap 
                               text-sm sm:text-base md:text-lg">
                                    {{ $t("header.button") }}
                                </button>
                            </NuxtLink>
                        </div>
                    </swiper-slide>
                </swiper-container>
            </div>
            <!-- <div class="">
                <swiper-container ref="containerRef" :init="false">
                    <swiper-slide v-for="(slide, idx) in caroselImageList" :key="idx" class="flex flex-col relative">
                        <img :src="slide.image" alt="Slide Image"
                            class="object-cover w-full h-[calc(100vh-15rem)] rounded-2xl" />
                        <div
                            class="absolute bottom-0 py-12 w-full h-auto bg-gradient-to-b from-slate-50/0 to-slate-900 flex flex-row px-20 items-end justify-between">
                            <div class="w-3/4">
                                <h1 class="font-black text-xl md:text-2xl lg:text-3xl xl:text-5xl">
                                    {{ $t("header.title") }}</h1>
                                <h1 class="text-xl font-light hidden sm:block">{{ $t("header.description") }}</h1>
                            </div>
                            <NuxtLink :to="`/${slide.link}`">
                                <button
                                    class="border border-white px-4 py-2 rounded bg-white text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white uppercase whitespace-nowrap">{{ $t("header.button") }}</button>
                            </NuxtLink>
                        </div>
                    </swiper-slide>
                </swiper-container>
            </div> -->
            <Footer></Footer>
        </div>
    </div>
</template>

<script setup>
import { useNewsStore } from '~~/store/newsData';
const newsStore = useNewsStore();

const containerRef = ref(null)
const { locale } = useI18n()

// this is use for update header content
const headerContent = ref([])

import { useI18n } from 'vue-i18n';
// import { computed } from 'vue';

// 1. Get the translation function (t)
const { t } = useI18n();

const message = t('cricketpage');

watch(locale, (newVal) => {
    if (newVal == 'en-HI') {
        // headerContent = 
    } else if (newVal == 'en-TM') {

    } else if (newVal == 'en-US') {

    }
})




const caroselImageList = ref([
    {
        'title': 'Slam Dunk Action: Indian Basketball Leagues',
        'description': 'Experience the thrilling dunks and fast-paced gameplay of basketball. Join the growing community and cheer for your favourite teams in India.',
        'image': 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/INSK%20test/category%20images/basketball.webp',
        'link': 'basketball'
    },
    {
        'title': 'Spike the Fun: Pro Volleyball Leagues',
        'description': 'Witness the amazing athleticism and teamwork in volleyball. Get hooked on the powerful serves and spectacular rallies that define the sport.',
        'image': 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/INSK%20test/category%20images/volleyball.webp',
        'link': 'volleyball'
    },
    {
        'title': 'Dribble and Score: India’s National Game',
        'description': 'Celebrate the legacy of Indian hockey. Feel the intensity of the stick work and goals in this classic and fast-paced field sport.',
        'image': 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/INSK%20test/category%20images/hockey.jpg',
        'link': 'hockey'
    },
    {
        'title': 'The Beautiful Game: Indian Football Mania',
        'description': 'Join the global passion for football. Follow your Indian Super League heroes and witness spectacular goals and unforgettable moments on the pitch.',
        'image': 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/INSK%20test/category%20images/footballstadium.jpg',
        'link': 'football'
    },
    {
        'title': 'Nation’s Passion: Catch The Cricket Fever',
        'description': 'Immerse yourself in the ultimate sport of India. From T20 thrills to Test match glory, follow every wicket and boundary in the cricket world.',
        'image': 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/INSK%20test/category%20images/cricket.jpg',
        'link': 'cricket'
    }
])

// const slides = ref(Array.from({ length: 10 }))
const swiper = useSwiper(containerRef, {
    effect: 'creative',
    loop: true,
    autoplay: {
        delay: 3000,
    },
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            shadow: true,
            translate: [0, 0, -400],
        },
    },
})

onMounted(() => {
    console.log(swiper.instance)
})

useHead({
    title: newsStore.pageSeoData.homepage.title,
    meta: [
        {
            name: newsStore.pageSeoData.homepage.name,
            content: newsStore.pageSeoData.homepage.content,
        },
    ],
})

</script>
