import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/Pages/HomePage.vue")
    },
    {
        path: "/about",
        name: "About",
        component: () => import("@/Pages/AboutPage.vue")
    },
    {
        path: "/contacts",
        name: "Contacts",
        component: () => import("@/Pages/ContactsPage.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;