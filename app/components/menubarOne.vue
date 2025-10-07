<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const localParth = useLocalePath()
const { locales, locale, setLocale } = useI18n()

// State to control the visibility of the mobile navigation menu
const isMobileMenuOpen = ref(false);
// Reference to the main navigation element to detect clicks outside of it
const navRef = ref(null);

// this is for router configuration
const route = useRouter()
const currentRoute = route.currentRoute.value.path

/**
 * Handles clicks anywhere on the document. 
 * Closes the mobile menu if it is open and the click target is outside the navigation bar.
 * This is essential for the "close on outside click" feature.
 * @param {Event} event 
 */
const handleClickOutside = (event) => {
    // Check if the click occurred outside the navigation bar AND the mobile menu is currently open
    if (navRef.value && !navRef.value.contains(event.target) && isMobileMenuOpen.value) {
        isMobileMenuOpen.value = false;
    }
};

// Lifecycle hooks to manage the global click listener
onMounted(() => {
    // Attach the listener when the component is mounted
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    // Clean up the listener when the component is destroyed to prevent memory leaks
    document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
    <!-- New: Navigation Bar - Added ref="navRef" to anchor the outside click detection -->
    <nav ref="navRef" class="bg-[#2C394B] rounded-xl shadow-xl p-4 sticky top-0 z-10">
        <div class="flex justify-between items-center">

            <!-- Website Title/Logo -->
            <NuxtLink :to="localParth('/')"
                class="text-2xl font-extrabold text-[#F7F7F7] hover:text-[#FF8A00] transition duration-150 tracking-wider">
                <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/INSK%20test/common/sitelogofinal.png"
                    alt="SportBet Logo" class="inline-block h-12">
            </NuxtLink>

            <!-- Desktop Menu Items (Hidden on Mobile) -->
            <div class="hidden lg:flex space-x-7 text-base font-semibold">
                <div class="flex flex-row gap-4 items-center">
                    <i class="fi fi-rr-home"></i>
                    <NuxtLink :to="localParth('/')"
                        :class="currentRoute === '/' ? 'text-[#FF8A00] hover:text-opacity-80 transition duration-150 border-b-2 border-[#FF8A00] pb-0.5' : 'text-[#F7F7F7] hover:text-[#FF8A00] transition duration-150'">
                        {{ $t("menu.home") }}
                    </NuxtLink>
                </div>
                <div class="flex flex-row gap-4 items-center">
                    <i class="fi fi-rr-cricket"></i>
                    <NuxtLink :to="localParth('/cricket')"
                        :class="currentRoute === '/cricket' ? 'text-[#FF8A00] hover:text-opacity-80 transition duration-150 border-b-2 border-[#FF8A00] pb-0.5' : 'text-[#F7F7F7] hover:text-[#FF8A00] transition duration-150'">
                        {{ $t("menu.cricket") }}</NuxtLink>
                </div>
                <!-- <NuxtLink to="/cricket"
                    class="text-[#FF8A00] hover:text-opacity-80 transition duration-150 border-b-2 border-[#FF8A00] pb-0.5">
                    Cricket</NuxtLink> -->
                <div class="flex flex-row gap-4 items-center">
                    <i class="fi fi-rr-football"></i>
                    <NuxtLink :to="localParth('/football')"
                        :class="currentRoute === '/football' ? 'text-[#FF8A00] hover:text-opacity-80 transition duration-150 border-b-2 border-[#FF8A00] pb-0.5' : 'text-[#F7F7F7] hover:text-[#FF8A00] transition duration-150'">
                        {{ $t("menu.football") }}
                    </NuxtLink>
                </div>
                <div class="flex flex-row gap-4 items-center">
                    <i class="fi fi-br-hockey-stick-puck"></i>
                    <NuxtLink :to="localParth('/hockey')"
                        :class="currentRoute === '/hockey' ? 'text-[#FF8A00] hover:text-opacity-80 transition duration-150 border-b-2 border-[#FF8A00] pb-0.5' : 'text-[#F7F7F7] hover:text-[#FF8A00] transition duration-150'">
                        {{ $t("menu.hockey") }}
                    </NuxtLink>
                </div>
                <div class="flex flex-row gap-4 items-center">
                    <i class="fi fi-rr-volleyball"></i>
                    <NuxtLink :to="localParth('/volleyball')"
                        :class="currentRoute === '/volleyball' ? 'text-[#FF8A00] hover:text-opacity-80 transition duration-150 border-b-2 border-[#FF8A00] pb-0.5' : 'text-[#F7F7F7] hover:text-[#FF8A00] transition duration-150'">
                        Volleyball</NuxtLink>
                </div>
                <div class="flex flex-row gap-4 items-center">
                    <i class="fi fi-rr-basketball"></i>
                    <NuxtLink :to="localParth('/basketball')"
                        :class="currentRoute === '/basketball' ? 'text-[#FF8A00] hover:text-opacity-80 transition duration-150 border-b-2 border-[#FF8A00] pb-0.5' : 'text-[#F7F7F7] hover:text-[#FF8A00] transition duration-150'">
                        {{ Basketball }}
                        {{ $t("menu.basketball") }}
                    </NuxtLink>
                </div>
            </div>

            <!-- Language Selector & Mobile Menu Button -->
            <div class="flex items-center space-x-4">

                <!-- Language Selector -->
                <div class="flex space-x-2 text-sm font-bold items-center">
                    <div class="cursor-pointer" v-for="item in locales">
                        <span class="hover:text-[#FF8A00] transition duration-150 pr-2"
                            @click="setLocale(item.code)">{{ item.name }}</span>
                        <span class=" text-gray-500">|</span>
                    </div>
                </div>


                <!-- Mobile Menu Button (Visible on Mobile) -->
                <button class="lg:hidden p-2 rounded-lg hover:bg-[#1A1A2E] transition duration-150"
                    @click.stop="isMobileMenuOpen = !isMobileMenuOpen">
                    <!-- @click.stop prevents the click from propagating to the document listener and immediately closing the menu after opening it. -->

                    <!-- Burger/Close Icon -->
                    <svg v-if="!isMobileMenuOpen" class="w-7 h-7 text-[#FF8A00]" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                    <svg v-else class="w-7 h-7 text-[#FF8A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu Dropdown: Visibility controlled by v-if and hidden on large screens (lg:hidden) -->
        <div v-if="isMobileMenuOpen"
            class="lg:hidden mt-4 pt-4 border-t border-[#1A1A2E] space-y-2 text-center text-base font-semibold">
            <NuxtLink to="/" class="block p-2 rounded-lg hover:bg-[#1A1A2E] transition duration-150">Home</NuxtLink>
            <NuxtLink to="/cricket" class="block p-2 rounded-lg hover:bg-[#1A1A2E] transition duration-150">
                Cricket</NuxtLink>
            <!-- <NuxtLink to="/cricket" class="block p-2 rounded-lg bg-[#FF8A00]/20 text-[#FF8A00] transition duration-150">
                Cricket</NuxtLink> -->
            <NuxtLink to="/football" class="block p-2 rounded-lg hover:bg-[#1A1A2E] transition duration-150">Football
            </NuxtLink>
            <NuxtLink to="/hockey" class="block p-2 rounded-lg hover:bg-[#1A1A2E] transition duration-150">Hockey
            </NuxtLink>
            <NuxtLink to="/volleyball" class="block p-2 rounded-lg hover:bg-[#1A1A2E] transition duration-150">
                Volleyball</NuxtLink>
            <NuxtLink to="/basketball" class="block p-2 rounded-lg hover:bg-[#1A1A2E] transition duration-150">
                Basketball</NuxtLink>
        </div>

    </nav>
</template>
