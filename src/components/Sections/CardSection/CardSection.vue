<script setup>
    import CardSectionHeader from '@/components/Sections/CardSection/CardSectionHeader.vue';
    import CardSectionBody from '@/components/Sections/CardSection/CardSectionBody.vue';
    import { defineProps } from 'vue';
    defineProps({
        title: {
            type: String,
            required: false
        },
        body: {
            type: String,
            required: false,
        },
        width: {
            type: String,
            required: false,
            default: 'auto'
        },
        height: {
            type: String,
            required: false,
            default: 'auto'
        }
    });
</script>
<template>
    <div class="card"
        :style="{
            width: width,
            height: height
        }"
    >   
        <slot v-if="!title" name="header"></slot>
        <CardSectionHeader v-else color="#fefefe"/>
        <slot v-if="!body" name="body"></slot>
        <CardSectionBody color="#fefefe"/>
    </div>
</template>
<style scoped>
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    }
</style>