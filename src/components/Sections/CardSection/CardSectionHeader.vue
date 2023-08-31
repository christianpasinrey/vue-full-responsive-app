<script setup>
    import { defineProps } from 'vue';

    defineProps({
        title: {
            type: String,
            required: false,
        },
        color:{
            type: String,
            required: false,
            default: 'gray'
        }
    });
    
</script>
<template>
    <div class="card-header"
        :style="{
            backgroundColor: color
        }"
    >
        <h2 v-if="title">{{ title }}</h2>
        <slot v-else name="title"></slot>
    </div>
</template>
<style scoped>
</style>