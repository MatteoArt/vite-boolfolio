import { createRouter, createWebHistory } from "vue-router";

//importazione componenti singole pagine
import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import Contacts from './pages/Contacts.vue';
import SingleProject from './pages/SingleProject.vue';


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/project/:id',
        name: 'project.show',
        component: SingleProject
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
})

export { router };