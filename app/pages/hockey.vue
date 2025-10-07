<template>
    <!-- Main Container: Background #1A1A2E (Navy-Black) and Primary Text #F7F7F7 (Off-White) -->
    <div class="min-h-screen bg-[#1A1A2E] font-sans text-[#F7F7F7] p-4 sm:p-6 lg:p-10 antialiased">
        <div class="max-w-7xl mx-auto space-y-12">

            <!-- menu bar section -->
            <menubar-one></menubar-one>

            <!-- Interactive Hero Image Section (Simulated Interactivity via Tailwind Hover Group) -->
            <section
                class="relative rounded-lg overflow-hidden h-72 sm:h-[calc(100vh-15rem)] shadow-xl group cursor-pointer transition duration-300 hover:shadow-2xl">
                <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/INSK%20test/category%20images/hockey.jpg"
                    alt="" class="w-full h-full object-cover">
            </section>

            <!-- Main Content Grid: 2/3 Matches & News, 1/3 Tournaments -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <!-- Column 1 & 2 (Matches & News) -->
                <div class="lg:col-span-2 space-y-12">

                    <!-- Section: Upcoming Cricket Matches -->
                    <section>
                        <h2 class="text-3xl font-bold mb-6 border-l-4 border-[#FF8A00] pl-3 text-[#F7F7F7]">📅
                            {{ $t("pagetitles.UpcomingCricketMatches") }}</h2>

                        <div class="space-y-4">
                            <!-- Match Card 1 (T20) -->
                            <div
                                class="bg-[#2C394B] p-5 rounded-lg shadow-md border border-[#1A1A2E] transition duration-150 ease-in-out hover:shadow-lg hover:ring-2 ring-[#FF8A00] cursor-pointer">
                                <div class="flex justify-between items-start mb-3">
                                    <span class="text-sm font-semibold text-gray-400">Oct 15 | 19:30 IST</span>
                                    <span
                                        class="px-3 py-1 text-xs font-bold rounded-full bg-red-600 text-[#F7F7F7] shadow-inner">T20</span>
                                </div>
                                <p class="text-xl font-bold text-[#F7F7F7] mb-2">India <span
                                        class="text-[#FF8A00]">vs</span> Sri Lanka</p>
                                <p class="text-sm text-gray-400">Venue: Wankhede Stadium, Mumbai</p>
                            </div>

                            <!-- Match Card 2 (ODI) -->
                            <div
                                class="bg-[#2C394B] p-5 rounded-lg shadow-md border border-[#1A1A2E] transition duration-150 ease-in-out hover:shadow-lg hover:ring-2 ring-[#FF8A00] cursor-pointer">
                                <div class="flex justify-between items-start mb-3">
                                    <span class="text-sm font-semibold text-gray-400">Oct 20 | 14:00 IST</span>
                                    <span
                                        class="px-3 py-1 text-xs font-bold rounded-full bg-green-600 text-[#F7F7F7] shadow-inner">ODI</span>
                                </div>
                                <p class="text-xl font-bold text-[#F7F7F7] mb-2">Australia <span
                                        class="text-[#FF8A00]">vs</span> New Zealand (World Cup)</p>
                                <p class="text-sm text-gray-400">Venue: HPCA Stadium, Dharamsala</p>
                            </div>

                            <!-- Match Card 3 (Test) -->
                            <div
                                class="bg-[#2C394B] p-5 rounded-lg shadow-md border border-[#1A1A2E] transition duration-150 ease-in-out hover:shadow-lg hover:ring-2 ring-[#FF8A00] cursor-pointer">
                                <div class="flex justify-between items-start mb-3">
                                    <span class="text-sm font-semibold text-gray-400">Nov 1-5 | 09:30 IST</span>
                                    <span
                                        class="px-3 py-1 text-xs font-bold rounded-full bg-blue-600 text-[#F7F7F7] shadow-inner">Test</span>
                                </div>
                                <p class="text-xl font-bold text-[#F7F7F7] mb-2">South Africa <span
                                        class="text-[#FF8A00]">vs</span> England</p>
                                <p class="text-sm text-gray-400">Venue: Centurion Park, Pretoria</p>
                            </div>
                        </div>
                    </section>

                    <!-- Section: Cricket Related News -->
                    <section v-if="newsVisibility">
                        <h2 class="text-3xl font-bold mb-6 border-l-4 border-[#FF8A00] pl-3 text-[#F7F7F7]">📰
                            {{ $t("pagetitles.LatestCricketNews") }}</h2>

                        <!-- News Card 1 for news load-->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-2" v-if="pending">
                            <div class="animate-pulse w-full h-[200px] bg-white/20 rounded-lg shadow-md"
                                v-for="value in 3" :key="value">
                            </div>
                        </div>
                        <!-- news card for fetch data -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-2" v-else-if="newsStore.hockeyNews">
                            <div class="bg-[#2C394B] p-4 rounded-lg shadow-md transition duration-150 ease-in-out hover:shadow-lg border border-[#1A1A2E] hover:border-[#FF8A00] cursor-pointer"
                                v-for="(item, index) in newsStore.hockeyNews" :key="item.uuid">
                                <img :src="item.image_url" alt="" class="">
                                <p class="text-sm text-gray-400 line-clamp-3 text-right py-2">Sorce : {{ item.source }}
                                </p>
                                <h3 class="text-lg font-semibold text-[#F7F7F7] mb-2">{{ item.title }}</h3>
                                <p class="text-sm text-gray-400 line-clamp-3">{{ item.description }}</p>
                                <div class="mt-3">
                                    <NuxtLink :to="item.url" target="_blank" class="cursor-pointer py-1">
                                        <button
                                            class="text-sm font-medium text-[#FF8A00] hover:text-opacity-80 transition duration-150">
                                            Full Article &rarr;
                                        </button>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                <!-- Column 3: Upcoming Tournaments -->
                <section class="lg:col-span-1">
                    <h2 class="text-3xl font-bold mb-6 border-l-4 border-[#FF8A00] pl-3 text-[#F7F7F7]">🏆
                        {{ $t("pagetitles.UpcomingTournaments") }}</h2>

                    <div class="bg-[#2C394B] p-6 rounded-lg shadow-md space-y-5">

                        <!-- Tournament Item 1 -->
                        <div class="pb-4 border-b border-[#1A1A2E] last:border-b-0">
                            <h3 class="text-xl font-extrabold text-[#F7F7F7]">T20 World Cup 2024</h3>
                            <p class="text-sm text-gray-400 mt-1">🌍 USA & West Indies</p>
                            <p class="text-xs text-[#FF8A00] font-semibold mt-1">Starts: June 2024</p>
                        </div>

                        <!-- Tournament Item 2 -->
                        <div class="pb-4 border-b border-[#1A1A2E] last:border-b-0">
                            <h3 class="text-xl font-extrabold text-[#F7F7F7]">Champions Trophy 2025</h3>
                            <p class="text-sm text-gray-400 mt-1">🇮🇳 Hosted by India</p>
                            <p class="text-xs text-[#FF8A00] font-semibold mt-1">Starts: February 2025</p>
                        </div>

                        <!-- Tournament Item 3 -->
                        <div class="pb-4 border-b border-[#1A1A2E] last:border-b-0">
                            <h3 class="text-xl font-extrabold text-[#F7F7F7]">Asia Cup 2024</h3>
                            <p class="text-sm text-gray-400 mt-1">🇱🇰 Sri Lanka & 🇵🇰 Pakistan</p>
                            <p class="text-xs text-[#FF8A00] font-semibold mt-1">Starts: September 2024</p>
                        </div>

                        <div class="pt-2">
                            <button
                                class="w-full py-2.5 bg-[#FF8A00] text-[#1A1A2E] font-bold rounded-lg shadow-md hover:bg-opacity-90 transition duration-150 ease-in-out hover:shadow-lg">
                                View All Tournament Schedules
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <!-- End of Main Content Grid -->
            <Footer></Footer>

        </div>

    </div>
</template>

<script setup>
import { useNewsStore } from '~~/store/newsData';
// import { ref, onBeforeMount, watch, useFetch, useRuntimeConfig } from 'vue'; // Ensure all imports are correct
// import { watch } from 'vue';

const config = useRuntimeConfig().public;
const newsVisibility = ref(true); // Used to control UI visibility on error
const newsStore = useNewsStore();

// 1. Define useFetch with immediate: false (to prevent initial call)
const { data, pending, error, execute } = useFetch(
    `${config.baseUrl}/getNews`, {
    query: {
        'search': 'hockey',
        'language': 'en'
    },
    immediate: false // Ensures it won't run until we call execute()
});

// 2. Use onBeforeMount to check the condition and trigger the fetch
onBeforeMount(() => {
    // Check if the store already has the news data
    if (newsStore.hockeyNews == null) {
        console.log("Store is empty. Executing fetch...");
        // Imperatively execute the API call
        execute();
    } else {
        console.log("Store already has data. Skipping fetch.");
        // newsVisibility can be set to false if you use it as a 'loading' indicator
        // or just let the template render the store data.
    }
});

// 3. Watch ONLY the 'pending' state to handle results when the fetch finishes
watch(pending, (newPending) => {
    // Logic should run ONLY when the fetch has just completed
    if (newPending === false) {
        if (data.value) {
            console.log('Fetch complete, data saved to store.');
            newsStore.hockeyNews = data.value;
            // newsVisibility remains true (data is ready)
        } else if (error.value) {
            console.error('Fetch error:', error.value);
            newsVisibility.value = false; // Hide UI element on error
        }
    }
});

useHead({
    title: newsStore.pageSeoData.hockey.title,
    meta: [
        {
            name: newsStore.pageSeoData.hockey.name,
            content: newsStore.pageSeoData.hockey.content,
        },
    ],
})
</script>