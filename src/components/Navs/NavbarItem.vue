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

    const handleSubmenu = (e) => {
        e.preventDefault();
        toggleSubmenu();
    };
</script>
<template>
    <RouterLink v-if="!item.submenu" :to="item.path">
        <span>{{ item.label }}</span>
    </RouterLink>

    <span v-else
        class="link-to-submenu"
        @mouseenter="handleSubmenu($event)"
        @mouseleave="handleSubmenu($event)"
    >
        {{ item.label }}
        <ul 
            v-if="showingSubmenu" 
            >
            <li 
                v-for="subitem,index in item.submenu" 
                :key="subitem"
                :style="{
                    borderRadius: index === item.submenu.length - 1 ? '5px' : '0px',
                    paddingBottom: index === item.submenu.length - 1 ? '0rem' : '0.5rem',
                    paddingTop: index === 0 ? '0.5rem' : '0rem'
                }"
                >
                <RouterLink :to="subitem.path">
                    <span style="width:100%;" @click.prevent="toggleSubmenu">{{ subitem.label }}</span>
                </RouterLink>
            </li>
        </ul>
    </span>
        
</template>
<style scoped>
span:hover {
    cursor: pointer;
    text-decoration: underline;
}
ul {
    list-style: none;
    padding-left: 0;
    position: absolute;
    top: 0;
    left: 2rem;
    z-index: 2;
    background-color: #fefefe;
    border-radius: 5px;
    width: 100%;
    margin-right: 2rem;
}
ul li {
    padding-left: 0.5rem;
}
.link-to-submenu{
    position: relative;
    z-index:2;
}
a {
    text-decoration: none;
    color: #000;
}
a:hover {
    color: #102957;
    border-bottom: 1px solid #102957;
}
</style>