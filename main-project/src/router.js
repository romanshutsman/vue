import {createRouter, createWebHistory} from "vue-router";

import  CoachDetails from './pages/coaches/CoachDetails.vue'
import  CoachRegistration from './pages/coaches/CoachRegistration.vue'
import  CoachesList from './pages/coaches/CoachesList.vue'
import  NotFround from './pages/NotFround.vue'
import  RequestsReceived from './pages/requests/RequestsReceived.vue'
// import  ContactCoach from './pages/requests/ContactCoach.vue'
import {defineAsyncComponent} from "vue";

const ContactCoach = defineAsyncComponent(() => import('./pages/requests/ContactCoach.vue'))

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachesList},
        {path: '/coaches/:id', component: CoachDetails, props: true, children: [
                {path: 'contact', component: ContactCoach}
            ]},
        {path: '/register', component: CoachRegistration},
        {path: '/requests', component: RequestsReceived},
        {path: '/:notFound(.*)', component: NotFround},
    ]
});

export default router;