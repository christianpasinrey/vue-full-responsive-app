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
    <div class="navbar">
        <NavbarItem 
            v-for="item in props.menu" 
            :key="item" 
            :item="item">
        </NavbarItem>
    </div>
</template>
<style scoped>
</style>