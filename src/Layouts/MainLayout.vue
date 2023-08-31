<script setup>
    import { defineProps } from 'vue';
    import AsideNavbar from '@/components/Side/AsideNavbar.vue';
    import NavbarComponent from '@/components/Navs/NavbarComponent.vue';
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
</script>
<template>
    <div :style="{
        display: props.verticalNavMenu ? 'grid' : 'flex',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gridTemplateRows: 'repeat(8, 1fr)',
        justifyContent: props.verticalNavMenu ? 'stretch' : 'flex-start',
        height: '100vh',
        overflow: 'hidden',
    }">
        <!-- if verticalNavMenu show sidebar and router view -->
        <aside class="sidebar" v-if="props.verticalNavMenu">
            <AsideNavbar :menu="props.menu"></AsideNavbar>
        </aside>
        <nav class="navbar" v-if="!props.verticalNavMenu">
            <NavbarComponent :menu="props.menu"></NavbarComponent>
        </nav>
        <!-- content must be adaptative to vertical sidebar or navbar -->
        <!-- if vertical, take the next columns and fill all the space -->
        <!-- if horizontal, take the next rows and fill all the space -->
        <div class="content"
            :style="{
                padding: props.verticalNavMenu ? '3rem' : '5rem 3rem',
                gridColumn: props.verticalNavMenu ? '2 / 8' : '1 / 8',
                gridRow: props.verticalNavMenu ? '1 / 8' : '2 / 8',
                overflow: 'auto',
                width: '100%',
            }"
            >
            <slot name="content"></slot>
        </div>
    </div>
</template>
<style scoped>
</style>