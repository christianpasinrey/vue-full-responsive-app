<script setup>
    import { defineProps, onBeforeMount } from 'vue';
    const props = defineProps({
        item: {
            type: Object,
            required: true,
        },
    });

    onBeforeMount(() => {
        console.log(props.item);
    });
</script>
<template>
    <div>
        <router-link :to="props.item.path">
            <span>{{ props.item.label }}</span>
        </router-link>
    </div>
</template>
<style scoped>
</style>