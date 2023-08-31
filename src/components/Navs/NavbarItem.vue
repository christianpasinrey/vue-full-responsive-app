<script setup>
    import { defineProps, ref, computed } from 'vue';
    defineProps({
        item: {
            type: Object,
            required: true,
        },
    });

    const showSubmenu = ref(false);

    const toggleSubmenu = () => {
        showSubmenu.value = !showSubmenu.value;
    };

    const showingSubmenu = computed(() => {
        return showSubmenu.value;
    });
</script>
<template>
    <router-link v-if="!item.submenu" :to="item.path">
        <span>{{ item.label }}</span>
    </router-link>

    <span v-else
        class="link-to-submenu"
        @mouseenter="toggleSubmenu"
    >
        {{ item.label }}
        <ul 
            v-if="showingSubmenu" 
            @mouseleave="toggleSubmenu">
            <li 
                v-for="subitem,index in item.submenu" 
                :key="subitem"
                :style="{
                    borderRadius: index === item.submenu.length - 1 ? '5px' : '0px',
                    paddingBottom: index === item.submenu.length - 1 ? '0rem' : '0.5rem',
                    paddingTop: index === 0 ? '0.5rem' : '0rem'
                }"
                >
                <router-link :to="subitem.path">
                    <span>{{ subitem.label }}</span>
                </router-link>
            </li>
        </ul>
    </span>
        
</template>
<style scoped>
/* style submenu */
ul {
    list-style: none;
    padding-left: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #fefefe;
    border-radius: 5px;
    width: 100%;
}
ul li {
    padding-left: 0.5rem;
}
.link-to-submenu{
    position: relative;
    z-index:2;
}
</style>