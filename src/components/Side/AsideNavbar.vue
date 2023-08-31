<script setup>
    import { defineProps, onBeforeMount } from 'vue';
    import SidebarItem from '@/components/Side/SidebarItem.vue';
    import '@/assets/css/aside-navbar.css';
    const props = defineProps({
        menu: {
            type: Array,
            required: true,
        },
    });
    onBeforeMount(() => {
        console.log(props.menu);
    });
</script>
<template>
    <nav class="sidebar">
        <SidebarItem 
            v-for="item in props.menu" 
            :key="item" 
            :item="item">
        </SidebarItem>
    </nav>
</template>
<style scoped>
</style>