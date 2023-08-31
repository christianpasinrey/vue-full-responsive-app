<script setup>
    import CardSectionHeader from '@/components/Sections/CardSection/CardSectionHeader.vue';
    import CardSectionBody from '@/components/Sections/CardSection/CardSectionBody.vue';
    import { defineProps } from 'vue';
    defineProps({
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: false,
        }
    });
</script>
<template>
    <div class="card">
        <CardSectionHeader :title="title" />
        <CardSectionBody :body="body" />
    </div>
</template>
<style scoped>
</style>