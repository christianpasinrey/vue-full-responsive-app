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
    <div class="aside-navbar">
        <SidebarItem 
            v-for="item in props.menu" 
            :key="item" 
            :item="item">
        </SidebarItem>
    </div>
</template>
<style scoped>
</style>