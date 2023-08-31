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
    <nav class="navbar">
        <NavbarItem 
            v-for="item in props.menu" 
            :key="item" 
            :item="item">
        </NavbarItem>
    </nav>
</template>
<style scoped>
</style>