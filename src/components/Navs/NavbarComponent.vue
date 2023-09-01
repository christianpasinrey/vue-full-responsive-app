<script setup>
    import NavbarItem from '@/components/Navs/NavbarItem.vue';
    import { defineProps } from 'vue';
    const props = defineProps({
        menu: {
            type: Array,
            required: true
        }
    });
</script>
<template>
    <header class="sticky-header__header">
        <nav>
            <NavbarItem 
                v-for="item in props.menu" 
                :key="item" 
                :item="item">
            </NavbarItem>
        </nav>
    </header>
</template>
<style scoped>
    nav {
        display: flex;
        align-items: center;
        gap: 1rem;
        height: 7vh;
        padding-left: 3rem;
    }
</style>