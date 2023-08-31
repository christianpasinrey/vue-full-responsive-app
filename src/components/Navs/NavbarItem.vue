<script setup>
    import { defineProps } from 'vue';
    defineProps({
        item: {
            type: Object,
            required: true,
        },
    });
</script>
<template>
    <div>
        <router-link :to="item.path">
            <span>{{ item.label }}</span>
        </router-link>
    </div>
</template>
<style scoped>
</style>