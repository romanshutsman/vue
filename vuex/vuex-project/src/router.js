import { createRouter, createWebHistory } from 'vue-router';

import store from "@/store";

import ProductsList from './pages/ProductsList.vue';
import UserCart from './pages/UserCart.vue';
import ShopAdmin from './pages/ShopAdmin.vue';
import SuperAdmin from './pages/SuperAdmin.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList },
    { path: '/cart', component: UserCart },
    { path: '/admin', component: ShopAdmin },
    { path: '/super-admin',
      component: SuperAdmin ,
      beforeEnter(to, from, next) {
        const access = store.getters.isUserAuth;
        // next(access);
        // if(!access)
        if(access) {
          next();
        } else {
          next('/');
          alert('No Access');
        }
      }
    },
  ]
});

export default router;