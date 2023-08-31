<script setup>
  import MainLayout from '@/Layouts/MainLayout';
  import menu from './main-menu';
</script>
<template>
  <MainLayout
    verticalNavMenu
    :menu="menu"
  >
    <template #content>
      <router-view />
    </template>
  </MainLayout>
</template>
<style>

</style>
