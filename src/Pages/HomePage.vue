<script setup>
    import CardSection from '@/components/Sections/CardSection/CardSection';
</script>
<template>
   <div class="home-page">
        <CardSection 
            width="100%"
            height="100%"
            >
            <template #header>
                <h2>Home page</h2>
            </template>
            <template #body>
                <p>Start to build something incredible</p>
            </template>
        </CardSection>
    </div>
</template>
<style scoped>
#home-page {
    display: flex;
    justify-content: start;
    align-items: start;
    width:100%;
    height: 100%;
}
</style>