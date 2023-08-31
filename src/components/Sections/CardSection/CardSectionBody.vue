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
        <p v-if="body" v-html="body"></p>
        <slot v-else name="body"></slot>
    </div>
</template>
<style scoped>
</style>