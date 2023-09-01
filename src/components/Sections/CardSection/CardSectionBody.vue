<script setup>
    import { defineProps } from 'vue';
    defineProps({
        body: {
            type: String,
            required: false
        }
    });
</script>
<template>
    <div class="card-body">
        <slot name="body"></slot>
    </div>
</template>
<style scoped>
</style>