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
    <div :style="{
        display: verticalNavMenu ? 'grid' : 'flex',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gridTemplateRows: 'repeat(9, 1fr)',
        justifyContent: props.verticalNavMenu ? 'stretch' : 'flex-start',
        height: '100vh',
        overflow: 'hidden',
    }">
        <AsideNavbar
            v-if="props.verticalNavMenu && isLargeScreen"
            :menu="props.menu">
        </AsideNavbar>
        <NavbarComponent 
            v-if="!props.verticalNavMenu && isLargeScreen"
            :menu="props.menu">
        </NavbarComponent>
        <HamburguerNav 
            v-if="!isLargeScreen" 
            :menu="props.menu">
        </HamburguerNav>
        <div class="content"
            :style="{
                /* adjust position if screen is large or not and if  verticalNavMenu is active or not*/
                gridColumn: props.verticalNavMenu && isLargeScreen ? '2 / 9' : '1 / 9',
                gridRow: !props.verticalNavMenu && isLargeScreen ? '2 / 9' : '1 / 9',
                overflow: 'auto',
                padding: '1rem',
                width: '100%',
                position:{
                    verticalNavMenu: isLargeScreen ? 'relative' : 'absolute',
                    horizontalNavMenu: 'relative',
                }[props.verticalNavMenu ? 'verticalNavMenu' : 'horizontalNavMenu'],
                top: {
                    verticalNavMenu: '0',
                    horizontalNavMenu: '4rem',
                }[props.verticalNavMenu ? 'verticalNavMenu' : 'horizontalNavMenu'],
                zIndex: 1,
            }">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<style scoped>
</style>