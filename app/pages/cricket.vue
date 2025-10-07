<template>
    <!-- Main Container: Background #1A1A2E (Navy-Black) and Primary Text #F7F7F7 (Off-White) -->
    <div class="min-h-screen bg-[#1A1A2E] font-sans text-[#F7F7F7] p-4 sm:p-6 lg:p-10 antialiased">
        <div class="max-w-7xl mx-auto space-y-12">

            <!-- menu bar section -->
            <menubar-one></menubar-one>

            <!-- Interactive Hero Image Section (Simulated Interactivity via Tailwind Hover Group) -->
            <section
                class="relative rounded-lg overflow-hidden h-72 sm:h-[calc(100vh-15rem)] shadow-xl group cursor-pointer transition duration-300 hover:shadow-2xl">
                <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/INSK%20test/category%20images/cricket.jpg"
                    alt="" class="w-full h-full object-cover">
            </section>

            <!-- Main Content Grid: 2/3 Matches & News, 1/3 Tournaments -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <!-- Column 1 & 2 (Matches & News) -->
                <div class="lg:col-span-2 space-y-12">

                    <!-- Section: Upcoming Cricket Matches -->
                    <section>
                        <h2 class="text-3xl font-bold mb-6 border-l-4 border-[#FF8A00] pl-3 text-[#F7F7F7]">
                            📅{{ $t("pagetitles.UpcomingCricketMatches") }}</h2>

                        <div class="space-y-4">
                            <!-- Loading Skeleton -->
                            <div class="flex flex-col gap-4" v-if="matchPending">
                                <div class="animate-pulse w-full h-[100px] bg-white/20 rounded-lg shadow-md"
                                    v-for="value in 3" :key="value">
                                </div>
                            </div>

                            <!-- Match Card 1 (T20) -->
                            <div class="bg-[#2C394B] p-5 rounded-lg shadow-md border border-[#1A1A2E] transition duration-150 ease-in-out hover:shadow-lg hover:ring-2 ring-[#FF8A00] cursor-pointer"
                                v-for="value in newsStore.matches">
                                <div class="flex justify-between items-start mb-3">
                                    <span class="text-sm font-semibold text-gray-400">{{ value.date }} | at
                                        {{ value.venue }}</span>
                                    <!-- <span
                                        class="px-3 py-1 text-xs font-bold rounded-full bg-red-600 text-[#F7F7F7] shadow-inner">T20</span> -->
                                </div>
                                <p class="text-xl font-bold text-[#F7F7F7] mb-2">{{ value.teams[0] }} <span
                                        class="text-[#FF8A00]">vs</span> {{ value.teams[1] }}</p>
                                <p class="text-sm text-gray-400">Type : {{ value.matchType }}</p>
                            </div>
                        </div>
                    </section>

                    <!-- Section: Cricket Related News -->
                    <section v-if="newsVisibility">
                        <h2 class="text-3xl font-bold mb-6 border-l-4 border-[#FF8A00] pl-3 text-[#F7F7F7]">📰
                            {{ $t("pagetitles.LatestCricketNews") }}</h2>

                        <!-- News Card 1 for news load-->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-2" v-if="newsPending">
                            <div class="animate-pulse w-full h-[200px] bg-white/20 rounded-lg shadow-md"
                                v-for="value in 3" :key="value">
                            </div>
                        </div>
                        <!-- news card for fetch data -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-2" v-else-if="newsStore.cricketNews">
                            <div class="bg-[#2C394B] p-4 rounded-lg shadow-md transition duration-150 ease-in-out hover:shadow-lg border border-[#1A1A2E] hover:border-[#FF8A00] cursor-pointer"
                                v-for="(item, index) in newsStore.cricketNews" :key="item.uuid">
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

                <!-- Column 3: Upcoming Series -->
                <section class="lg:col-span-1">
                    <h2 class="text-3xl font-bold mb-6 border-l-4 border-[#FF8A00] pl-3 text-[#F7F7F7]">
                        🏆{{ $t("pagetitles.UpcomingTournaments") }}</h2>

                    <div class="bg-[#2C394B] p-6 rounded-lg shadow-md space-y-5">

                        <!-- Loading Skeleton -->
                        <div class="flex flex-col gap-4" v-if="seriesPending">
                            <div class="animate-pulse w-full h-[100px] bg-white/20 rounded-lg shadow-md"
                                v-for="value in 3" :key="value">
                            </div>
                        </div>

                        <!-- Tournament Item 1 -->
                        <div class="pb-4 border-b border-[#1A1A2E] last:border-b-0" v-for="value in newsStore.series">
                            <h3 class="text-xl font-extrabold text-[#F7F7F7]">{{ value.name }}</h3>
                            <p class="text-sm text-gray-400 mt-1">Started : {{ value.startDate }}</p>
                            <p class="text-sm text-gray-400 mt-1">Started : {{ value.endDate }}</p>
                            <p class="text-xs text-[#FF8A00] font-semibold mt-1"> 50/50 matches : {{ value.odi }}</p>
                            <p class="text-xs text-[#FF8A00] font-semibold mt-1"> 20/20 matches :{{ value.t20 }}</p>
                            <p class="text-xs text-[#FF8A00] font-semibold mt-1"> Test matches : {{ value.test }}</p>
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
const seriesVisibility = ref(true); // Used to control UI visibility on error
const matchVisibility = ref(true); // Used to control UI visibility on error
const newsStore = useNewsStore();

// 1. Define useFetch with immediate: false (to prevent initial call)
const { data: newsData, pending: newsPending, error: newsError, execute: newsExecute } = useFetch(
    `${config.baseUrl}/getNews`, {
    query: {
        'search': 'cricket',
        'language': 'en'
    },
    immediate: false // Ensures it won't run until we call execute()
});

// get cricket series data
const { data: seriesData, pending: seriesPending, error: seriesError, execute: seriesExecute } = useFetch(
    `${config.baseUrl}/cricket/series`, {
    immediate: false
});


// get cricket matches data
const { data: matchData, pending: matchPending, error: matchError, execute: matchExecute } = useFetch(
    `${config.baseUrl}/cricket/matches
`, {
    immediate: false
});

// 2. Use onBeforeMount to check the condition and trigger the fetch
onBeforeMount(() => {
    // Check if the store already has the news data
    if (newsStore.cricketNews == null) {
        console.log("Store is empty. Executing fetch...");
        // Imperatively execute the API call
        newsExecute();
    } else {
        console.log("Store already has data. Skipping fetch.");
        // newsVisibility can be set to false if you use it as a 'loading' indicator
        // or just let the template render the store data.
    }
    // this is to check series data
    if (newsStore.series == null) {
        console.log("Store is empty. Executing fetch...");
        // Imperatively execute the API call
        seriesExecute();
    } else {
        console.log("Store already has data. Skipping fetch.");
        // newsVisibility can be set to false if you use it as a 'loading' indicator
        // or just let the template render the store data.
    }

    // this is to check match data
    if (newsStore.matches == null) {
        console.log("Store is empty. Executing fetch...");
        // Imperatively execute the API call
        matchExecute();
    } else {
        console.log("Store already has data. Skipping fetch.");
        // newsVisibility can be set to false if you use it as a 'loading' indicator
        // or just let the template render the store data.
    }
});

// 3. Watch ONLY the 'pending' state to handle results when the fetch finishes
watch(newsPending, (newPending) => {
    // Logic should run ONLY when the fetch has just completed
    if (newPending === false) {
        if (newsData.value) {
            console.log('Fetch complete, data saved to store.');
            newsStore.cricketNews = newsData.value;
            // newsVisibility remains true (data is ready)
        } else if (newsError.value) {
            console.error('Fetch error:', newsError.value);
            newsVisibility.value = false; // Hide UI element on error
        }
    }
});

// 3. Watch ONLY the seriespending
watch(seriesPending, (newPending) => {
    // Logic should run ONLY when the fetch has just completed
    if (newPending === false) {
        if (seriesData.value) {
            console.log('Fetch complete, data saved to store.');
            console.log(seriesData.value);
            newsStore.series = seriesData.value;
            // newsVisibility remains true (data is ready)
        } else if (seriesError.value) {
            console.error('Fetch error:', seriesError.value);
            seriesVisibility.value = false; // Hide UI element on error
        }
    }
});
// 3. Watch ONLY the matchPending 
watch(matchPending, (newPending) => {
    // Logic should run ONLY when the fetch has just completed
    if (newPending === false) {
        if (matchData.value) {
            console.log('Fetch complete, data saved to store.');
            newsStore.matches = matchData.value;
            // newsVisibility remains true (data is ready)
        } else if (matchError.value) {
            console.error('Fetch error:', matchError.value);
            matchVisibility.value = false; // Hide UI element on error
        }
    }
});

useHead({
    title: newsStore.pageSeoData.cricket.title,
    meta: [
        {
            name: newsStore.pageSeoData.cricket.name,
            content: newsStore.pageSeoData.cricket.content,
        },
    ],
})



</script>
