import {createRouter, createWebHistory} from 'vue-router';
import StoryView from '../views/StoryView.vue';
import UserView from '../views/UserView.vue';


const routes = [
    { 
        path: "/", 
        name: 'Home',
        component : StoryView 
    },
    { 
        path: "/users/:id", 
        name: 'User',
        component : UserView
    },
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
);

export default router

