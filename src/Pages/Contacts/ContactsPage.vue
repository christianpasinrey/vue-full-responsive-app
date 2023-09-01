<script setup>
    import CardSection from '@/components/Sections/CardSection/CardSection';
</script>
<template>
    <div class="contacts-page">
        <CardSection 
            width="100%"
            height="100%"
            >
            <template #header>
                <h2>My contacts</h2>
            </template>
        </CardSection>
    </div>
</template>
<style scoped>
#contacts-page {
    display: flex;
    justify-content: start;
    align-items: start;
    width:100%;
    height: 100%;
}
</style>