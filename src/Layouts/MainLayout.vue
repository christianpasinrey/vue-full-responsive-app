<script setup>
    import { defineProps, ref, computed, onMounted, onBeforeUnmount } from 'vue';
    import AsideNavbar from '@/components/Side/AsideNavbar.vue';
    import NavbarComponent from '@/components/Navs/NavbarComponent.vue';
    import HamburguerNav from '@/components/Navs/HamburguerNav.vue';
    import '@/assets/css/main.css';

    const props = defineProps({
        verticalNavMenu: {
            type: Boolean,
            required: false,
            default: false,
        },
        menu: {
            type: Array,
            required: true,
        },
    });

    const screenWidth = ref(window.innerWidth);

    const isLargeScreen = computed(() => screenWidth.value >= 1024);
    const isTabletScreen = computed(() => screenWidth.value >= 768 && screenWidth.value < 1024);
    const isMobileScreen = computed(() => screenWidth.value < 768);

    const handleResize = () => {
        const width = window.innerWidth;
        if (width !== screenWidth.value) {
            screenWidth.value = width;
        }
        console.log(screenWidth.value);
    };

    onMounted(() => {
        window.addEventListener('resize', () => {
            handleResize();
        });
    });

    onBeforeUnmount(() => {
        document.removeEventListener('resize', () => {
            handleResize();
        });
    });
</script>
<template>
    <div 
        id="main-layout"
        :class="{
            'sidebar': props.verticalNavMenu && isLargeScreen,
            'navbar': (!props.verticalNavMenu && isLargeScreen) || (isTabletScreen && props.verticalNavMenu),
            'navbar--mobile': !isMobileScreen,
        }">
        <AsideNavbar
            v-if="props.verticalNavMenu && (isLargeScreen || isTabletScreen)"
            :menu="props.menu">
        </AsideNavbar>
        <NavbarComponent 
            v-if="!props.verticalNavMenu && (isLargeScreen || isTabletScreen)"
            :menu="props.menu">
        </NavbarComponent>
        <HamburguerNav 
            v-if="isMobileScreen" 
            :menu="props.menu">
        </HamburguerNav>
        <div 
            :class="{
                'sidebar__main': props.verticalNavMenu && isLargeScreen,
                'navbar__main': !props.verticalNavMenu && isLargeScreen || !isLargeScreen,
                'tablet__main': !props.verticalNavMenu && isTabletScreen,
                'mobile__main': isMobileScreen,
            }"
        >
            <slot name="content"></slot>
        </div>
    </div>
</template>
<style scoped>
#main-layout{
    height: 100vh;
    width: 100vw;
}
</style>