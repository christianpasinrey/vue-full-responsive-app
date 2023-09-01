<script setup>
    import CardSection from '@/components/Sections/CardSection/CardSection';
</script>
<template>
    <div class="about-page">
        <CardSection 
            width="100%"
            height="100%"
            >
            <template #header>
                <h2>Card section title</h2>
            </template>
            <template #body>
                <p>Card section body</p>
            </template>
        </CardSection>
    </div>
</template>
<style scoped>
#about-page {
    display: flex;
    justify-content: start;
    align-items: start;
    width:100%;
    height: 100%;
}
</style>