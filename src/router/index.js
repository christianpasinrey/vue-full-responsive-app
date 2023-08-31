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
        component: () => import("@/Pages/Contacts/ContactsPage.vue")
    },
    {
        path: "/contacts/add",
        name: "AddContact",
        component: () => import("@/Pages/Contacts/AddContactPage.vue")
    },
    {
        path: "/contacts/list",
        name: "ListContacts",
        component: () => import("@/Pages/Contacts/ListContactsPage.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;