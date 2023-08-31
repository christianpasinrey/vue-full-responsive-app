<script setup>
    import { defineProps, ref, computed } from 'vue';
    defineProps({
        menu: {
            type: Array,
            required: true
        }
    });

    const showMenu = ref(false);

    const toggleMenu = () => {
        showMenu.value = !showMenu.value;
    };

    const showingMenu = computed(() => {
        return showMenu.value;
    });
</script>
<template>
    <nav>
        <button
            @click.prevent="toggleMenu"    
        >
            <svg 
                width="24"
                height="24"
                viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" fill-rule="evenodd" d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75ZM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8Zm.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75Z" clip-rule="evenodd"/>
            </svg>
        </button>
        <ul v-if="showingMenu">
            <li 
                v-for="item,index in menu" 
                :key="item"
                :style="{
                    borderRadius: index === menu.length - 1 ? '5px' : '0px'
                }"
                >
                <router-link :to="item.path">
                    {{ item.label }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<style scoped>
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0rem 2rem;
        background-color: #fefefe;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        width: 100vw;
        height: 4rem;
        position:relative;
    }
    ul{
        justify-content: space-between;
        align-items: center;
        list-style: none;
        gap: 0.5rem;
        position: absolute;
        top: 2rem;
        left: 2rem;
        background-color: #fefefe;
        z-index: 2;
        padding:0;
        border-radius: 5px;
    }
    li{
        padding: 0.5rem;
        color:black;
    }

    a{
        color:black;
        text-decoration: none;
    }
    a:hover{
        color:blue;
    }
    button{
        border-radius: 5px;
        border: none;
        background-color: transparent;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    button:hover{
        background-color: #fefefe;
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
    }
</style>