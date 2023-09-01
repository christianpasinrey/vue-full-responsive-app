<script setup>
    import CardSection from '@/components/Sections/CardSection/CardSection';
</script>
<template>
    <div class="contacts-list-page">
        <CardSection 
            width="100%"
            height="100%"
            >
            <template #header>
                <h2>My contacts</h2>
            </template>
            <template #body>
                <p>Here you can see all your contacts</p>
            </template>
        </CardSection>
    </div>
</template>
<style scoped>
#contacts-list-page {
    display: flex;
    justify-content: start;
    align-items: start;
    width:100%;
    height: 100%;
}
</style>